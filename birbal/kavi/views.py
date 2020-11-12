from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist

from django.views.decorators.http import require_http_methods
# from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from ratelimit.decorators import ratelimit

from django.contrib.auth import logout

from kavi.auth_utils import authenticate_and_login, issue_password_and_send_sms

from kavi.models import Review, Platform, ServiceProvider

# Authentication
@require_http_methods(["POST"])
@ratelimit(key = 'ip', rate='3/m')
def request_password(request):
    # Will be true if the same IP makes more than 3 POST
    # requests/minute.
    if getattr(request, 'limited', False):
        return HttpResponse()

    phone_number = request.POST['phone_number']
    issue_password_and_send_sms(phone_number)
    return HttpResponse(status = 204)

@require_http_methods(["POST"])
def login_customer(request):
    phone_number = request.POST['phone_number']
    password = request.POST['password']
    customer, password_valid = authenticate_and_login(request, phone_number, password)
    if customer is not None:
        if password_valid == False:
            return HttpResponse("Password has expired", status = 422)
        return JsonResponse({'name': customer.name})
    return HttpResponse("Password is invalid", status = 422)

@require_http_methods(["POST"])
def logout_customer(request):
    logout(request)
    return HttpResponse(status = 204)

# Reviews
@require_http_methods(["GET"])
# TODO(Rajat): Re-enable after
# @login_required
def reviews_by_license_plate(request, license_plate_state, license_plate_number):
    license_plate = "{license_plate_state}:{license_plate_number}".format(license_plate_state = license_plate_state, license_plate_number = license_plate_number)
    reviews = Review.objects.filter(reviewee__license_plate = license_plate)
    # TODO: Implement Pagination
    return HttpResponse(serializers.serialize('json', reviews), status = 200)

@require_http_methods(["GET"])
# TODO(Rajat): Re-enable after
# @login_required
def get_review_questionnaire(request):
    return HttpResponse("TODO")

@require_http_methods(["PUT"])
# TODO(Rajat): Re-enable after
# @login_required
def create_review_for_license_plate(request):
    reviewer_name = request.PUT['reviewer_name']
    gender = request.PUT['gender']
    reviewee_name = request.PUT['reviewee_name']
    license_plate = request.PUT['license_plate']
    sexually_inappropriate = request.PUT['sexually_inappropriate']
    racially_inappropriate = request.PUT['racially_inappropriate']
    text = request.PUT['text']
    nps = request.PUT['nps']
    platform_id = request.PUT['platform_id']
    platform_name = request.PUT['platform_name'] # In case of 'other'

    # TODO: Validations for review fields

    # TODO: May be the following belongs in a manager/service and should be wrapped in a transaction
    # Update reviewer fields
    customer = request.user.customer
    customer.name = reviewer_name
    customer.gender = gender
    customer.save()

    # find_or_create platform
    try:
        platform = Platform.objects.get(id = platform_id) | Platform.objects.get(name__iexact = platform_name)
    except ObjectDoesNotExist:
        platform = Platform.objects.create(name = platform_name)

    # find or create service provider
    service_provider = ServiceProvider.objects.get_or_create(license_plate = license_plate, active = True)
    if reviewee_name is not None and len(reviewee_name) > 0:
        service_provider.name = reviewee_name
        service_provider.save()

    # create_or_update review
    Review.objects.update_or_create(
        reviewer = customer, reviewee = service_provider,
        defaults = {
            'sexually_inappropriate': sexually_inappropriate,
            'racially_inappropriate': racially_inappropriate,
            'text': text,
            'nps': nps,
            'platform': platform,
            'reviewee': service_provider,
            'reviewer': customer
        }
    )

    return HttpResponse(status = 204)
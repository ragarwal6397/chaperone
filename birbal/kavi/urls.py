from django.urls import path, re_path

from . import views

urlpatterns = [
    path('request_password', views.request_password, name='request_password'),
    path('login', views.login_customer, name='login_customer'),
    path('logout', views.logout_customer, name='logout_customer'),
    re_path(r'^reviews/license_plate/(?P<license_plate_state>[A-Z]{2}):(?P<license_plate_number>[0-9A-Z]{1,8})$', views.reviews_by_license_plate, name='reviews_by_license_plate'),
    re_path(r'^reviews/license_plate/(?P<license_plate_state>[A-Z]{2}):(?P<license_plate_number>[0-9A-Z]{1,8})/create$', views.create_review_for_license_plate, name='create_review_for_license_plate'),
]
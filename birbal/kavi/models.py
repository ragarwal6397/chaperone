from django.db import models
from model_utils import Choices
from django.utils.translation import gettext as _
from django.core.validators import MaxValueValidator

# Create your models here.
class User(models.Model):
    GENDERS = Choices(
        (0, 'male', _('male')),
        (1, 'female', _('female')),
        (2, 'prefer not to disclose', _('prefer not to disclose'))
    )
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 256)
    gender = models.IntegerField(choices = GENDERS)
    phone_number = models.CharField(max_length = 16)
    active = models.BooleanField(default = True, null = False)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return "id: {id}, name: '{name}', gender: '{gender}', "\
            "phone_number: '{phone_number}', active: {active}, "\
            "created_at: '{created_at}', updated_at: '{updated_at}'".\
            format(
                id = self.id,
                name = self.name,
                gender = self.GENDERS[self.gender],
                phone_number = self.phone_number,
                active = self.active,
                created_at = self.created_at,
                updated_at = self.updated_at
            )

class ServiceProvider(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 256)
    active = models.BooleanField(default = True, null = False)
    # TODO: find the right spot for this considering other service provider types
    license_plate = models.CharField(max_length = 32)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return "id: {id}, name: '{name}' "\
            "license_plate: '{license_plate}', active: {active}, "\
            "created_at: '{created_at}', updated_at: '{updated_at}'".\
            format(
                id = self.id,
                name = self.name,
                license_plate = self.license_plate,
                active = self.active,
                created_at = self.created_at,
                updated_at = self.updated_at
            )

    class Meta:
        unique_together = (('name', 'license_plate'))

class Platform(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 64)
    description = models.CharField(max_length =  512)
    website_url = models.CharField(max_length = 256)
    logo_url = models.CharField(max_length = 256)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return "id: {id}, name: '{name}', description: '{description}', "\
            "website_url: '{website_url}', logo_url: '{logo_url}', "\
            "created_at: '{created_at}', updated_at: '{updated_at}'".\
            format(
                id = self.id,
                name = self.name,
                description = self.description[:32] + (self.description[32:] and '...'),
                website_url = self.website_url,
                logo_url = self.logo_url,
                created_at = self.created_at,
                updated_at = self.updated_at
            )

class Review(models.Model):
    id = models.AutoField(primary_key = True)
    sexually_inappropriate = models.BooleanField(default = False, null = False)
    racially_inappropriate = models.BooleanField(default = False, null = False)
    text = models.CharField(max_length = 512)
    nps = models.PositiveSmallIntegerField(validators = [MaxValueValidator(10)])
    reviewer = models.ForeignKey(User, on_delete = models.CASCADE)
    reviewee = models.ForeignKey(ServiceProvider, on_delete = models.CASCADE)
    platform = models.ForeignKey(Platform, on_delete = models.SET_NULL, null = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return "id: {id}, sexually_inappropriate: {sexually_inappropriate}, text: '{text}', "\
            "racially_inappropriate: {racially_inappropriate}, nps: {nps}, "\
            "platform: {platform}, reviewer: {reviewer}, reviewee: {reviewee}, "\
            "created_at: '{created_at}', updated_at: '{updated_at}'".\
            format(
                id = self.id,
                sexually_inappropriate = self.sexually_inappropriate,
                text = self.text[:32] + (self.text[32:] and '...'),
                racially_inappropriate = self.racially_inappropriate,
                nps = self.nps,
                platform = "<{platform}>".format(platform = self.platform),
                reviewer = "<{reviewer}>".format(reviewer = self.reviewer),
                reviewee = "<{reviewee}>".format(reviewee = self.reviewee),
                created_at = self.created_at,
                updated_at = self.updated_at
            )
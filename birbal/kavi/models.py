from django.db import models
from model_utils import Choices

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

class ServiceProvider(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 256)
    active = models.BooleanField(default = True, null = False)
    # TODO: find the right spot for this considering other service provider types
    license_plate = models.CharField(max_length = 32)
    class Meta:
        unique_together = (('name', 'license_plate'))

class Review(models.Model):
    id = models.AutoField(primary_key = True)
    sexually_inappropriate = models.BooleanField(default = False, null = False)
    racially_inappropriate = models.BooleanField(default = False, null = False)
    text = models.CharField(max_length = 512)
    nps = models.PositiveIntegerField
    reviewer = models.ForeignKey(User, on_delete = models.CASCADE)
    reviewee = models.ForeignKey(ServiceProvider, on_delete = models.CASCADE)
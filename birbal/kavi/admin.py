from django.contrib import admin
from .models import Customer, ServiceProvider, Platform, Review

# Register your models here.
admin.site.register(Customer)
admin.site.register(ServiceProvider)
admin.site.register(Platform)
admin.site.register(Review)

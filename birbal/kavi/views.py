from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import serializers

# Create your views here.
def index(request):
    return HttpResponse("Hello!")
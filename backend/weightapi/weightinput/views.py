from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from .models import BodySize, User
import json 
# Create your views here.

def api_authenticate(request):
    if request.user.is_authenticated:
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=404)

def api_register(request):
    data = json.load(request.body)
    if 'email' not in data:
        return HttpResponse(status=404)
    if 'name' not in data:
        return HttpResponse(status=404)
    if 'password' not in data:
        return HttpResponse(status=404)   
    email = data['email']
    name = data['name']
    password = data['password']
    body_size = BodySize.objects().filter(
        lower_bust = 28,
        upper_bust = 28,
        lower_waist = 28,
        upper_waist = 28,
        lower_hips = 28,
        upper_hips = 28
    )
    if not len(body_size):
        body_size = BodySize(
            lower_bust = 28,
            upper_bust = 28,
            lower_waist = 28,
            upper_waist = 28,
            lower_hips = 28,
            upper_hips = 28
        )
    else:
        body_size = body_size[0]
    try:
        User.objects().create(
            email = email,
            name = name, 
            password = password,
            body_size = body_size
        )
        login(request, user)
        return HttpResponse(status=200)
    catch:
        return HttpResponse(status=404)
    
    

def api_login(request):
    username = json.load(request.body)['email']
    password = json.load(request.body)['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=404)

def api_logout(request):
    logout(request)
    return HttpResponse(status=200)
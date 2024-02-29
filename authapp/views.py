from django.shortcuts import render

def index(request):
    return render(request, "authapp/login.html")

def register(request):
    return render(request, "authapp/register.html")

def reset_password(request):
    return render(request, "authapp/reset-password.html")
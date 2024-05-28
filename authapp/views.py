from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

def index(request):
    return render(request, "authapp/login.html")

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        username

    return render(request, "authapp/register.html")

def reset_password(request):
    return render(request, "authapp/reset-password.html")



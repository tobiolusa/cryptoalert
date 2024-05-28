from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.contrib import messages
from django import forms

def index(request):
    return render(request, "authapp/login.html")

def register(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not (first_name and last_name and username and email and password):
            messages.error("Please fill out all fields")
        else:
            if User.objects.filter(username=username).exists():
                messages.error(request, "Username already existed. ")
            elif User.objects.filter(email=email).exists():
                messages.error(request, "Email address already existed")
            else:
                user = User.objects.create_user(
                    email=username,
                    first_name=first_name,
                    last_name=last_name,
                    username=username,
                    password=password
                )
                login(request, user)
                messages.success(request, 'Account Created Successfully.')
                return redirect('login')
    return render(request, "authapp/register.html")

def reset_password(request):
    return render(request, "authapp/reset-password.html")



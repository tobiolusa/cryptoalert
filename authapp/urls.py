from django.contrib import admin
from django.urls import path
from authapp import views 

urlpatterns = [
    path('', views.index, name="login"), 
    path('register/', views.register, name="register"),
    path('reset-password/', views.reset_password, name="reset-password")
]
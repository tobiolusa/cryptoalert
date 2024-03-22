from django.contrib import admin
from django.urls import path
from dashboard.views import chart 

urlpatterns = [
    path('', chart, name="chart"), 
    
]
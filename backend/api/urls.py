from django.urls import path
from . import views

urlpatterns = [
    path('welcome/', views.welcome, name='welcome'),
    path('', views.home, name='home'),
    path('contact/', views.contact_form, name='contact_form'),
]
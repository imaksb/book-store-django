from django.contrib import admin
from django.urls import include, path
from .views import *

app_name = 'authorization'

urlpatterns = [
    path('login/', login_view, name='login_view'),
    path('register/', register_view, name='register_view'),
    path('logout/', logout_view, name='logout_view'),

]
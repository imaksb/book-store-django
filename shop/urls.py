from django.contrib import admin
from django.urls import include, path
from .views import *


urlpatterns = [
    path('', index, name='index'),
    # path('products/<str:category>/', loadProducts, name='load_products_by_category'),
]


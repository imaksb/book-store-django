from urllib import response
from django.http import HttpResponse
from django.shortcuts import render
from panel.models import Product


import logging
logger = logging.getLogger(__name__)


def index(request):
    products = Product.objects.all()

    return render(request, 'shop/index.html', {'products': list(products)})

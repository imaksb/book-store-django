from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, serializers
from panel.models import Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'manufacturer', 'image', 'category']



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

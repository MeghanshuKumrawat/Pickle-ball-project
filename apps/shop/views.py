from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from apps.shop.models import Product, Cart
from apps.shop.serializers import (ProductSerializer, ProductDetailSerializer, CartReadSerializer, CartWriteSerializer)

class ProductsViewSet(ViewSet):
    def list(self, request):
        queryest = Product.objects.filter(is_active=True)
        serializer = ProductSerializer(queryest, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        queryest = get_object_or_404(Product, pk=pk)
        serializer = ProductDetailSerializer(queryest)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CartsViewSet(ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryest = Cart.objects.filter(ordered=False, user=request.user)
        serializer = CartReadSerializer(queryest, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        queryest = get_object_or_404(Product, pk=pk)
        serializer = ProductDetailSerializer(queryest)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        queryest = Cart.objects.filter(user=request.user, ordered=False, product__id=request.data.get('product'))
        if queryest.exists():
            queryest.first().quantity += request.data.get('quantity')
            queryest.first().save()
            serializer = CartWriteSerializer(queryest.first())
        else:
            request.data['user'] = request.user.id
            serializer = CartWriteSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def delete(self, request, pk=None):
        queryset = get_object_or_404(Cart, pk=pk)
        queryset.delete()
        return Response({"message":"cart item deleted!"}, status=status.HTTP_204_NO_CONTENT)



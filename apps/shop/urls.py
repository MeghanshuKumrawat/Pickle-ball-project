
from django.urls import path
from rest_framework import routers

from apps.shop.views import (ProductsViewSet, CartsViewSet)

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'products', ProductsViewSet, basename='products')
router.register(r'carts', CartsViewSet, basename='carts')

urlpatterns = [
]


urlpatterns += router.urls
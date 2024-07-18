from django.contrib import admin
from apps.shop.models import Category, Product, ProductImage, Review

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Review)
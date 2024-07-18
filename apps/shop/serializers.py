from rest_framework import serializers
from apps.shop.models import Product, ProductImage, Cart

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = '__all__'

    def get_image(self, obj):
        images = ProductImage.objects.filter(product=obj)
        if images.exists():
            return ProductImageSerializer(images.first()).data["image"]
        return None

class ProductDetailSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(read_only=True, many=True)
    class Meta:
        model = Product
        fields = '__all__'

class CartWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartReadSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'
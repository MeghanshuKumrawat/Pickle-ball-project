from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password


from apps.accounts.models import User

class LoginSerializer(serializers.Serializer):
    """
    Login Serializer
    """
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)

class RegisterSerializer(serializers.ModelSerializer):
    """
    Registration Serializer
    """
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'password2']

    def create(self, validated_data):
        # password = validated_data.pop('password')
        password2 = validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        # user.set_password(password)
        user.save()
        return user
    
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
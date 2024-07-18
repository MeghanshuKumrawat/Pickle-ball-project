import pytz

from django.contrib.auth import authenticate
from django.utils import timezone

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


from apps.accounts.models import (User)
from apps.accounts.serializers import (LoginSerializer, RegisterSerializer, UserSerializer)

class LoginApiView(APIView):
    """
    Login API View
    """
    def post(self, request):
        print(timezone.localtime(timezone.now()))
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        try:
            user = User.objects.get(email=email)
            print(user, '---------------')
            if user.check_password(password) is True:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access': str(refresh.access_token),
                    'role':'admin' if user.is_superuser else 'user',
                    'permissions':[]
                })
            else:
                print('password is not correct')
                return Response({'message':'provide a valid username/email/password'}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({'message':'user does not exist'}, status=status.HTTP_401_UNAUTHORIZED)
        

class RegisterApiView(APIView):
    """
    Register API View
    """
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class ProfileApiView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
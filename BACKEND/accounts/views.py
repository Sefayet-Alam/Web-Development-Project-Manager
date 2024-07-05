from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, authenticate
from .serializers import UserSerializer  # Correctly import the serializer
from .models import User  # Ensure your model is correctly referenced

User = get_user_model()

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer  # Correct the serializer class name

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(self.request.data['password'])
        user.save()
        Token.objects.create(user=user)

class LoginView(generics.GenericAPIView):  # Change to GenericAPIView
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            return Response({'token': user.auth_token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

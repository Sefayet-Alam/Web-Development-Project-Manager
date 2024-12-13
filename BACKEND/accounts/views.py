# views.py
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, authenticate
from rest_framework.decorators import api_view
from .serializers import UserSerializer  # Correctly import the serializer
from .models import User  # Ensure your model is correctly referenced
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated




User = get_user_model()

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer  # Correct the serializer class name

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(self.request.data['password'])
        user.save()
        Token.objects.create(user=user)

# class LoginView(generics.GenericAPIView):
#     serializer_class = UserSerializer

#     def post(self, request, *args, **kwargs):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         user = authenticate(username=username, password=password)
#         if user:
#             token, _ = Token.objects.get_or_create(user=user)
#             return Response({'token': token.key})
#         else:
#             return Response({'error': 'Invalid credentials'}, status=401)
    
class AuthUserView(APIView):
        permission_classes=[IsAuthenticated]
        def get(self, request):
            user = request.user 
            print(request.user)
            serializer=UserSerializer(user)
            return Response(serializer.data)
        

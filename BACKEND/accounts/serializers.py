# accounts/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()  # Ensure compatibility with the custom User model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number')
        extra_kwargs = {
            'password': {'write_only': True}  # Ensure password is not returned in serialized data
        }

    # def create(self, validated_data):
    #     # Extract extra fields
    #     date_of_birth = validated_data.pop('date_of_birth', None)
    #     gender = validated_data.pop('gender', None)
    #     phone_number = validated_data.pop('phone_number', None)
        
    #     # Create user instance
    #     user = User.objects.create(**validated_data)
        
    #     # Set additional fields if provided
    #     if date_of_birth:
    #         user.date_of_birth = date_of_birth
    #     if gender:
    #         user.gender = gender
    #     if phone_number:
    #         user.phone_number = phone_number
        
    #     # Save user with additional data
    #     user.save()
    #     return user

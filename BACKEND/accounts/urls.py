# accounts/urls.py
from django.urls import path
from .views import SignUpView, LoginView
from .views import *
from rest_framework.routers import DefaultRouter
from dj_rest_auth.views import LoginView, LogoutView, PasswordChangeView, PasswordResetView, PasswordResetConfirmView, UserDetailsView


urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]

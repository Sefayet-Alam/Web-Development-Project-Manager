# accounts/urls.py
from django.urls import path,include
from .views import SignUpView
from .views import *
from rest_framework.routers import DefaultRouter
from dj_rest_auth.views import  PasswordChangeView, PasswordResetView, PasswordResetConfirmView, UserDetailsView


urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    # path('login/', LoginView.as_view(), name='login'),
    # path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', AuthUserView.as_view(), name='profile'), 
    path('auth/', include('dj_rest_auth.urls')), 
] 

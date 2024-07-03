
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router=DefaultRouter()

router.register('Project',ProjectViewset,basename='project')
router.register('ProjectManager',ProjectManagerViewset,basename='projectmanager')
urlpatterns=router.urls


# urlpatterns =[
#     path('',home)
# ]
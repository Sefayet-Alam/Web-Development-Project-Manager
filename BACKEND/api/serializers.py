
from rest_framework import serializers
from .models import *

class ProjectSerializer(serializers.ModelSerializer):    
    class Meta:
        model=Project
        fields = ('id','student_name','student_roll','student_contact','name','projectmanager','start_date','end_date','comments','status')
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['projectmanager'] = ProjectManagerSerializer(instance.projectmanager).data
        return rep
         
class ProjectManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProjectManager
        fields= ('id','name','rank','dept','manager_contact') 
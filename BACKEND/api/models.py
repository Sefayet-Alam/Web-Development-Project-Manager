from django.db import models


class ProjectManager(models.Model):
    name=models.CharField(unique=True,max_length=100)
    rank=models.CharField(max_length=200,default="Lecturer")
    dept=models.CharField(max_length=200,default="CSE")
    manager_contact=models.CharField(max_length=200,default="NULL")
    created=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True)
    def __str__(self) -> str:
        return self.name
    
class Project(models.Model):
    name= models.CharField(unique=True,max_length=100)
    student_name=models.CharField(max_length=200,default="NULL")
    student_roll=models.CharField(max_length=200,default="NULL")
    student_contact=models.CharField(max_length=200,default="NULL")
    projectmanager=models.ForeignKey(ProjectManager,on_delete=models.CASCADE,blank=True,null=True)
    start_date=models.DateField()
    end_date=models.DateField()
    comments=models.CharField(max_length=500,blank=True,null=True)
    status=models.CharField(max_length=100)
    created=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True) 
    
    def __str__(self) -> str:
        return self.name
    

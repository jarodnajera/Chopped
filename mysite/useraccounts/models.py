from django.db import models

# Create your models here.

class User(models.Model):
    #userID = models.AutoField(primary_key=True)
    username = models.CharField(max_length = 200)
    userpass = models.CharField(max_length = 100) 
    user_joinDate = models.DateField()


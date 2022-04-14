from django.db import models

class Ingredient(models.Model):
    raw_ingr = models.CharField(max_length=255)
    raw_words = models.IntegerField()
    processed = models.CharField(max_length=255)
    len_process = models.IntegerField()  #length of process? idk
    replaced = models.CharField(max_length=255)
    count = models.IntegerField()

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    minutes = models.IntegerField()
    contributor_id = models.IntegerField()
    submitted = models.DateField()
    tags = models.JSONField()
    nutrition = models.JSONField()
    n_steps = models.IntegerField()
    steps = models.JSONField()
    description = models.TextField()
    ingredients = models.JSONField()
    n_ingredients = models.IntegerField()


    

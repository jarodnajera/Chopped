from django.db import models
from datetime import datetime

class Ingredient(models.Model):
    raw_ingr = models.CharField(max_length=255)
    raw_words = models.IntegerField()
    processed = models.CharField(max_length=255)
    len_process = models.IntegerField()  #length of process? idk
    replaced = models.CharField(max_length=255)
    count = models.IntegerField()

class Recipe(models.Model):
    name = models.CharField(max_length=255, default='')
    recipe_id = models.IntegerField(default=0)
    minutes = models.PositiveSmallIntegerField(default=0, blank=True)
    contributor_id = models.IntegerField(default=0, blank=True)
    submitted = models.CharField(max_length=255, default='')
    tags = models.TextField(blank=True)
    nutrition = models.TextField(blank=True)
    n_steps = models.PositiveSmallIntegerField(default=0, blank=True)
    steps = models.TextField(blank=True)
    description = models.TextField(blank=True)
    ingredients = models.TextField(blank=True)
    n_ingredients = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.name


    

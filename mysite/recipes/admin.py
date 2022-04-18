from django.contrib import admin

# Register your models here.
from import_export import resources
from .models import Recipe, Ingredient


admin.site.register(Recipe)
admin.site.register(Ingredient)

class RecipeResource(resources.ModelResource):

    class Meta:
        model = Recipe   

class IngredientResource(resources.ModelResource):

    class Meta:
        model = Ingredient 

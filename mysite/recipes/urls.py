from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index'),
    path('', views.home, name='home'),
    path('recipes/', views.all_recipes, name="recipe_list"), #first argument is the website path, second argument is what is being called in view.py file, thrid argument is what is being referenced by the html file
    path('search_recipes/', views.search_recipes, name="search_recipes"),
]
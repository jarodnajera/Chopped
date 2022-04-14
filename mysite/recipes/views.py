from django.http import HttpResponse
from django.views.generic import TemplateView, ListView
from .models import Recipe, Ingredient
from django.shortcuts import render

def search_recipes(request):
    if request.method == "POST":
        searched = request.POST['searched'] #obtain value from 'searched' variable in html page
        recipes =  Recipe.objects.filter(name__contains=searched ) #find recipes that contains 'searched' in their name and assign to variable recipes
        return render(request, 'recipes/search_recipe.html', {'searched':searched, 'recipes':recipes}) 
    else:
        return render(request, 'recipes/search_recipe.html', {})

def all_recipes(request):
    recipe_list = Recipe.objects.all()
    return render(request, 'recipes/recipe_list.html', {'recipe_list' : recipe_list})


def home(request):
    return render(request, 'recipes/home.html', {})

def index(request):
    return HttpResponse("Hello, world. You're at the recipes index.")

class HomePageView(TemplateView):
    template_name = 'home.html'

class SearchResultsView(ListView):
    model = Recipe
    template_name = 'search_results.html'
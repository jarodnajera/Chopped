from django.http import HttpResponse
from django.views.generic import TemplateView, ListView
from .models import Recipe, Ingredient
from django.shortcuts import render

def search_recipes(request):
    if request.method == "POST":
        searched = request.POST['searched'] #obtain value from 'searched' variable in html page
        #print(searched[:1].strip() == "n")
        if searched[:2].strip() == "n-": #search by name
            searched = searched[2:] #This will enable searching in different fields
            recipes = Recipe.objects.filter(name__contains=searched ) #find recipes that contains 'searched' in their name and assign to variable recipes
        elif searched[:2].strip() == "m-": #search by minutes
            searched = searched[2:] #This will enable searching in different fields
            recipes = Recipe.objects.filter(minutes__contains=searched ) #find recipes that contains 'searched' in their name and assign to variable recipes
        elif searched[:2].strip() == "d-": #search by description
            searched = searched[2:] #This will enable searching in different fields
            recipes = Recipe.objects.filter(description__contains=searched ) #find recipes that contains 'searched' in their name and assign to variable recipes
        elif searched[:2].strip() == "i-": #search by ingredients
            searched = searched[2:] #This will enable searching in different fields
            recipes = Recipe.objects.filter(ingredients__contains=searched ) #find recipes that contains 'searched' in their name and assign to variable recipes
        else: #default search by name
            recipes = Recipe.objects.filter(name__contains=searched ) #find recipes that contains 'searched' in their name and assign to variable recipes
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
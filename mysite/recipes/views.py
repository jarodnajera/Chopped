from django.http import HttpResponse
from django.views.generic import TemplateView, ListView
from .models import Recipe, Ingredient

def index(request):
    return HttpResponse("Hello, world. You're at the recipes index.")

class HomePageView(TemplateView):
    template_name = 'home.html'

class SearchResultsView(ListView):
    model = Recipe
    template_name = 'search_results.html'
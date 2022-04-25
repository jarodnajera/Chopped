from django.apps import AppConfig
from import_data import LoadJSON

class RecipesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'recipes'
    imported_recipes = LoadJSON("./recipes.json")

    def ready(self):
        pass
        #startup code 
        #file_path = os.path.expanduser('./recipes.json')
        
        #db = json.load(open(self.location , "r"))
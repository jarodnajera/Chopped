import csv
from django.core.management import BaseCommand
from recipes.models import Recipe

class Command(BaseCommand):
    help = 'Load a recipes csv file into the database'

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        with open(path, 'rt', encoding='utf-8') as f:
            reader = csv.reader(f, dialect='excel')
            for row in reader:
                Recipe.objects.create(
                    name=row[0],
                    recipe_id=row[1],
			  minutes=row[2],
                    contributor_id=row[3],
			  submitted=row[4],
			  tags=row[5],
			  nutrition=row[6],
			  n_steps=row[7],
                    steps=row[8],
			  description=row[9],
                    ingredients=row[10],
			  n_ingredients=row[11],
                )
            
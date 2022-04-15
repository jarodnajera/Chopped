# Generated by Django 4.0.3 on 2022-04-14 23:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0006_recipe_recipe_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='contributor_id',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='minutes',
            field=models.PositiveSmallIntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='n_ingredients',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='n_steps',
            field=models.PositiveSmallIntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='nutrition',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='recipe_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='steps',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='submitted',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='tags',
            field=models.TextField(blank=True),
        ),
    ]
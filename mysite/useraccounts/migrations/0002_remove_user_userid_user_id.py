# Generated by Django 4.0.4 on 2022-04-14 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('useraccounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='userID',
        ),
        migrations.AddField(
            model_name='user',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
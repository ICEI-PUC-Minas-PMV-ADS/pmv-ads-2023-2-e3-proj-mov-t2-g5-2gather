# Generated by Django 4.1 on 2023-11-05 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pke',
            field=models.CharField(blank=True, max_length=128, null=True, unique=True, verbose_name='pke'),
        ),
    ]
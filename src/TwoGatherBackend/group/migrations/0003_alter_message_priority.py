# Generated by Django 4.1 on 2023-10-29 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('group', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='priority',
            field=models.IntegerField(choices=[(0, 'Normal'), (1, 'Urgent')], default=0, verbose_name='Priority'),
        ),
    ]
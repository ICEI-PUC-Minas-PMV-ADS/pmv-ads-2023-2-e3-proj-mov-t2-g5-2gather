# Generated by Django 4.2.5 on 2023-10-03 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_user_messages'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=128, unique=True, verbose_name='E-mail'),
        ),
    ]

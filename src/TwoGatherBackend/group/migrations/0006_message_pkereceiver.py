# Generated by Django 4.1 on 2023-11-05 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('group', '0005_message_pkesentby'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='pkeReceiver',
            field=models.CharField(blank=True, max_length=128, null=True, verbose_name='pke'),
        ),
    ]

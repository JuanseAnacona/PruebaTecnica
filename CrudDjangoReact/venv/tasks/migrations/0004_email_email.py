# Generated by Django 4.2.6 on 2024-04-06 03:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_telefonos_indicativo_telefonos_numero'),
    ]

    operations = [
        migrations.AddField(
            model_name='email',
            name='email',
            field=models.EmailField(default=0, max_length=255),
        ),
    ]

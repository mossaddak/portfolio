# Generated by Django 3.2.3 on 2022-12-01 16:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApp', '0033_remove_projectinfo_photo'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BackEnd',
            new_name='BackendSkill',
        ),
        migrations.RenameModel(
            old_name='FrontEnd',
            new_name='FrontendSkill',
        ),
    ]

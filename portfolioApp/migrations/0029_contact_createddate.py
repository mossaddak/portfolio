# Generated by Django 4.1 on 2022-08-24 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApp', '0028_alter_research_publisheddate'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='CreatedDate',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
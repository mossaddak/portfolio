# Generated by Django 4.1.3 on 2023-03-29 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApp', '0037_rename_totalnumberdynamicwebsite_projectcount_servicecountry_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=250)),
                ('subHeading', models.CharField(max_length=250)),
                ('image', models.ImageField(upload_to='5_testimonials')),
            ],
        ),
    ]

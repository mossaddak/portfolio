from tkinter import Image
from django.db import models
from ckeditor.fields import RichTextField

class HomePage(models.Model):
    FirstName = models.CharField(max_length=250)
    LastName = models.CharField(max_length=250)
    SubTitle = models.CharField(max_length=250, blank=True, null=True)
    Photo = models.ImageField(upload_to='1_home_image')
    Facebbok = models.CharField(max_length=250, blank=True, null=True)
    Instagram = models.CharField(max_length=250, blank=True, null=True)
    Linkedin = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f'{self.pk}.{self.FirstName} {self.LastName}'

class About(models.Model):
    Photo = models.ImageField(blank=True, null=True, upload_to='2_about_image')
    Name = models.CharField(max_length=250, blank=True, null=True)
    Profile = models.TextField()
    Address = models.TextField()
    Study = models.TextField()

    def __str__(self):
        return f'{self.pk}.{self.Profile}'

class FrontendSkill(models.Model):
    Title = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.pk}.{self.Title}'

class BackendSkill(models.Model):
    Title = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.pk}.{self.Title}'

class ProjectCount(models.Model):
    TotalProjects = models.IntegerField()
    TotalCliens = models.IntegerField()
    ServiceCountry = models.IntegerField()

    def __str__(self):
        return f'{self.pk}.Total Project:{self.TotalProjects},(Total Clients:{self.TotalCliens},Service Country:{self.ServiceCountry})'

class Contact(models.Model):
    Name = models.CharField(max_length=250)
    Email = models.EmailField()
    Message = models.TextField()

    def __str__(self):
        return f'{self.pk}.Name:{self.Name},(Email:{self.Message})'

class Category(models.Model):
    Title = models.CharField(max_length=250)
    def __str__(self):
        return f'{self.pk}.{self.Title}'

class ProjectInfo(models.Model):
    category = models.ForeignKey(Category, related_name="ProjectInfoRelatedName", on_delete=models.CASCADE)
    ProjectName = models.CharField(max_length=250)
    #Photo = models.ImageField(upload_to='3_project_image')
    Descriptions = RichTextField(blank=True, null=True)
    CreatedDate = models.DateTimeField(null=True)
    VideoLink = models.CharField(null=True, max_length=250)
    def __str__(self):
        return f'{self.pk}.{self.ProjectName}'

class Research(models.Model):
    Photo = models.ImageField(upload_to='4_reasearch_image')
    Title = models.TextField()
    Authors = RichTextField(blank=True, null=True)
    PublishedDate = models.DateTimeField()
    PaperLink = models.CharField(max_length=250, null=True, blank=True)

    def __str__(self):
        return f'{self.pk}.Publish Date:{self.PublishedDate}.{self.Title}'
    
class Testimonial(models.Model):

    heading = models.CharField(max_length=250)
    subHeading = models.CharField(max_length=250)
    image = models.ImageField(blank=False, upload_to='5_testimonials')
    def __str__(self):
        return f"{self.pk}.{self.heading}"

from django.contrib import admin
from .models import (
        HomePage,
        About,
        FrontendSkill,
        BackendSkill,
        ProjectCount,
        Contact,
        Category,
        ProjectInfo,
        Research,
        Testimonial
    )

#home page
class HomePageAdmin(admin.ModelAdmin):
    list_display = ("FirstName", "LastName", "SubTitle", "Photo", "Facebbok", "Instagram", "Linkedin",)

#about page
class AboutPageAdmin(admin.ModelAdmin):
    list_display = ("Photo", "Name", "Profile", "Address", "Study",)

#frontend skill
class FrontendSkillAdmin(admin.ModelAdmin):
    list_display = ("Title",)

#backend skill
class BackendSkillAdmin(admin.ModelAdmin):
    list_display = ("Title",)

#project count
class ProjectCountAdmin(admin.ModelAdmin):
    list_display = ("TotalProjects", "TotalCliens", "ServiceCountry")

#all project info
class ProjectInfoAdmin(admin.ModelAdmin):
    list_display = ("ProjectName", "category", "VideoLink")

#research info
class ResearchAdmin(admin.ModelAdmin):
    list_display = ("Title", "Photo","PublishedDate", "PaperLink")




# Register your models here.
admin.site.register(HomePage, HomePageAdmin) 
admin.site.register(About, AboutPageAdmin)  
admin.site.register(FrontendSkill, FrontendSkillAdmin) 
admin.site.register(BackendSkill, BackendSkillAdmin) 
admin.site.register(ProjectCount, ProjectCountAdmin)
admin.site.register(Contact)
admin.site.register(Category)
admin.site.register(ProjectInfo,ProjectInfoAdmin) 
admin.site.register(Research,ResearchAdmin)
admin.site.register(Testimonial) 

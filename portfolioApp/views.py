from unicodedata import category
from django.shortcuts import render,redirect,get_object_or_404
from .models import (
    HomePage,
    About,
    FrontendSkill,
    BackendSkill,
    ProjectCount,
    Contact,
    ProjectInfo,
    Category,
    Research,
    Testimonial
)
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.core.mail import send_mail


def Index(request):

    #Product.objects.filter(category__category__in=category_names)

    #banners__________________________
    testimonials = Testimonial.objects.all()
    total_testimonials = testimonials.count()
    list = []
    
    for i in range(0,total_testimonials):
        list.append(i)

    context = {
        "homePage":HomePage.objects.all(),
        "AboutME":About.objects.all(),
        "FrontendSkill":FrontendSkill.objects.all(),
        "BackendSkill":BackendSkill.objects.all(),
        "ProjectCount":ProjectCount.objects.all(),        
        "Category":Category.objects.all(),
        "ProjectInfo":ProjectInfo.objects.all(),
        "Research":Research.objects.all(),

        #testimonials
        "testimonials":testimonials,
        "banner_range":list,
    }
    return render (request, 'index.html', context)

def ContactME(request):

    if request.method == "POST":
        MessageSenderName = request.POST.get('name')
        SenderMessage = request.POST.get('message')
        SenderEmail = request.POST.get('email')
        Contact.objects.create(
            Name = MessageSenderName,
            Email = SenderEmail,
            Message = SenderMessage,
        )

       
        send_mail(
            '(Portfolio)' + MessageSenderName,
            SenderMessage,
            SenderEmail,
            ['mossaddak15-2413@diu.edu.bd'],
        )
        messages.success(request,f"{MessageSenderName} thanks for message me. I'll contact you soon.")
    return HttpResponseRedirect(request.META.get('HTTP_REFERER')) 




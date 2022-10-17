from django.shortcuts import render
import random

# Create your views here.
def home(request):
    return render(request, "generator/home.html")

def about(request):
    return render(request, "generator/about.html")

def password(request):
    
    characters = list("abcdefghijklmnopqrstuvwxyz")
    characters_upper = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    characters_special = list("$%&_-@#/()=!")
    characters_number= list("1234567890")
    
    generated_password= ""
    
    if request.GET.get('length') != 'Select the length of your passowrd': 
        length = int(request.GET.get("length"))
    else: 
        return render(request, "generator/home.html")
        
    if request.GET.get("uppercase"):
        characters.extend(list("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
    if request.GET.get("special"):
        characters.extend(list("$%&_-@#/()=!"))
    if request.GET.get("numbers"):
        characters.extend(list("1234567890"))
    
    
    for x in range(length):
        generated_password+= random.choice(characters)
        
    return render(request, "generator/password.html", {"password" : generated_password})
from django.shortcuts import render,redirect
from django.http import HttpResponse

# Create your views here.

def main(request):
    return render(request,'press/main.html')

def project(request):
    return render(request,'press/project.html')

def wedding(request):
    return render(request,'press/wedding.html')

def candid(request):
    return render(request,'press/can.html')

def birth(request):
    return render(request,'press/birth.html')

def thiruvizha(request):
    return render(request,'press/thiru.html')

def about(request):
    return render(request,'press/about.html')
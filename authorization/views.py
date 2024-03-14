# views.py
from django.contrib.auth import login, authenticate, logout
from django.db import IntegrityError
from .forms import CustomUserCreationForm 
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
import logging


logger = logging.getLogger(__name__)


def register_view(request):
    error_message = None

    if request.user.is_authenticated:
            logger.error(f"user {request.user} is already logged in")

            return redirect('/')
    
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            try:
                form.save()

                user = form.instance
                login(request, user)

                logger.error(f"user {user} registered and logged in")

                return redirect('/panel/')  
            except IntegrityError:
                error_message = "Login already exists. Choose a different login."
        else:
            print(form.errors)
            error_message = "Invalid form. Please check the input values."
    
    return render(request, 'authorization/register.html', {'error_message': error_message})


def login_view(request):
    if request.user.is_authenticated:
            logger.error(f"user {request.user} is already logged in")

            return redirect('/')
    
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            logger.error(f"user {user} logged in")

            return redirect('/panel/')
        else:
            return render(request, 'authorization/login.html', {'error_message': 'Invalid login or password'})
        
    return render(request, 'authorization/login.html')


@login_required(login_url='/authorization/login/')
def logout_view(request):
    user = request.user
    logout(request)

    logger.error(f"User {user} logged out")

    return redirect('/')
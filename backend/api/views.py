from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

@api_view(['POST'])
def contact_form(request):
    #parse the request data
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    #basic validation
    if not name or not email or not message:
        return Response({'error': 'All fields are required.'}, status=400)
    if '@' not in email:
        return Response({'error': 'Invalid email address.'}, status=400)
    
    #process form data (send email, log message)
    print(f'[Contact] New message from {name} ({email}): {message}')

    #send notification email
    try:
        send_mail(
            subject='New Contact Form Submission',
            message=f'Name: {name}\nEmail: {email}\nMessage: {message}',
            from_email=settings.DEFAULT_FROM_EMAIL, or 'noreply@example.com'
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
        )
    except Exception as e:
        print(f'[Error] Failed to send email: {e}')
        return Response({'error': 'Failed to send email.'}, status=500)
    #return success response
    return Response({'success': 'Message sent successfully!'}, status=200)


@api_view(['GET'])
def welcome(request):
    data = {'message': 'Welcome to the LOTR Fan Club, adventurer!'}
    return Response(data)

def home(request):
    return HttpResponse("Welcome to the LOTR Fan Club, adventurer!")
          

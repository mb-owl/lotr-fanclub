from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def welcome(request):
    data = {'message': 'Welcome to the LOTR Fan Club, adventurer!'}
    return Response(data)
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import EmpleadoSerializer, EmailSerializer, TelefonosSerializer
from .models import Empleados, Email, Telefonos
# Create your views here.

class EmpleadoView(viewsets.ModelViewSet):
    serializer_class= EmpleadoSerializer
    queryset = Empleados.objects.all()

class EmailView(viewsets.ModelViewSet):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()

class TelefonoView(viewsets.ModelViewSet):
    serializer_class = TelefonosSerializer
    queryset = Telefonos.objects.all()

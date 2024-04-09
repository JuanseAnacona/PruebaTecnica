from rest_framework import serializers
from .models import Empleados, Telefonos, Email

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleados
        fields = "__all__"

class TelefonosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telefonos
        fields = "__all__"

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = "__all__"
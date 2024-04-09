from django.contrib import admin
from .models import Empleados, Telefonos, Email

# Register your models here.
admin.site.register(Empleados)
admin.site.register(Telefonos)
admin.site.register(Email)
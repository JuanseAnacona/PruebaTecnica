from django.db import models
from datetime import  date

# Create your models here.
class Empleados(models.Model) :
    nombres = models.CharField(max_length=255)
    apellidos = models.CharField(max_length=255)
    IDENTIFICACION = (("nit" ,"nit"), ("cc" , "cc"))
    tipoIdentificacion = models.CharField(max_length=3, choices = IDENTIFICACION, default = "nit")
    identificacion = models.IntegerField(default=0, blank=False)
    fechaIngreso = models.DateField(default=date.today)
    salarioMensual = models.IntegerField(blank=False)
    cargo= models.CharField(max_length=255)
    departamento = models.CharField(max_length=255)


    
    def __str__(self) -> str:
        return f'Empleados {self.id} : {self.nombres} {self.apellidos} { self.tipoIdentificacion} {self.identificacion} {self.fechaIngreso} {self.salarioMensual} {self.cargo} {self.departamento}'
    
class Telefonos(models.Model) :
    TIPO = (("cell", "Celular"), ("tel","Telefono"))
    tipo = models.CharField(max_length=4, choices=TIPO , default="cell")
    numero = models.BigIntegerField(default=0, blank=False)
    indicativo = models.IntegerField(default=0, blank=False)
    empleadoId = models.ForeignKey(Empleados, on_delete=models.SET_NULL, null=True)
    
    def __str__(self) -> str:
        return f'Telefonos {self.id} : {self.tipo} {self.numero} {self.indicativo} {self.empleadoId}'

class Email(models.Model) :
    email = models.EmailField(max_length=255, default= 0)
    empleadoId = models.ForeignKey(Empleados, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return f'Email {self.id} : {self.email} {self.empleadoId}'
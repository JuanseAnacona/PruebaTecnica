from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r"empleado", views.EmpleadoView, "empleado")
router.register(r"email", views.EmailView, "email")
router.register(r"telefono", views.TelefonoView, "telefono")

urlpatterns = [
    
    path("empleado/", include(router.urls)),
    path("docs/", include_docs_urls(title= "Documentacion API")),


]

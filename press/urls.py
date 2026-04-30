from django.urls import path
from . import views

app_name='press'
urlpatterns = [
    path('',views.main,name='main'),  
    path('project/',views.project,name='project'),
    path('wedding/',views.wedding,name='wedding'),
    path('candid/',views.candid,name='candid'),
    path('birth/',views.birth,name='birth'),
    path('thiruvizha/',views.thiruvizha,name='thiruvizha'),
    path('about/',views.about,name='about')
    
]
from django.urls import path
from . import views

app_name = 'blogapp'

urlpatterns = [
    path('', views.BlogListCreate.as_view()),
    path('<int:pk>/',views.BlogDetailView.as_view(), name='blog_detail')
]
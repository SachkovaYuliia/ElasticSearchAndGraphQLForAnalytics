from django.urls import path
from .views import DataUploadView
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('upload-csv/', DataUploadView.as_view(), name='upload_csv'),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]

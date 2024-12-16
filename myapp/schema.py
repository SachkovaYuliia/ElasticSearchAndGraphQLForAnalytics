import graphene
from graphene_django.types import DjangoObjectType
from .models import DataRecord

class DataRecordType(DjangoObjectType):
    class Meta:
        model = DataRecord

class Query(graphene.ObjectType):
    data_record = graphene.Field(DataRecordType, id=graphene.Int())

    def resolve_data_record(self, info, id):
        return DataRecord.objects.get(id=id)

schema = graphene.Schema(query=Query)

from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from .models import DataRecord

@registry.register_document
class DataRecordDocument(Document):
    name = fields.TextField()
    description = fields.TextField()

    class Index:
        name = 'datarecords'

    class Django:
        model = DataRecord
        fields = ['id', 'name', 'description']

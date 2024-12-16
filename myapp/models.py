from django.db import models

class DataRecord(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    data_file = models.FileField(upload_to='data_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

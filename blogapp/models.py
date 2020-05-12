from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    img = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
        
from django.contrib import admin
from .models import Example

# Register your models here.

#admin.site.register(Article)


@admin.register(Example)
class ExampleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')

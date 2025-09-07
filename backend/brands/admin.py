from django.contrib import admin
from .models import Brand

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'country', 'is_active', 'is_featured', 'products_count', 'created_at')
    list_filter = ('is_active', 'is_featured', 'country', 'created_at')
    search_fields = ('name', 'slug', 'description', 'country')
    prepopulated_fields = {'slug': ('name',)}
    ordering = ('sort_order', 'name')
    
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('name', 'slug', 'description', 'logo', 'banner')
        }),
        ('اطلاعات شرکت', {
            'fields': ('website', 'country', 'founded_year')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description', 'meta_keywords'),
            'classes': ('collapse',)
        }),
        ('نمایش', {
            'fields': ('is_active', 'is_featured', 'sort_order')
        }),
    )

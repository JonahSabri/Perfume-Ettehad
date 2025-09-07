from django.contrib import admin
from .models import Page, FAQ, ContactInfo, SiteSetting

@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'is_active', 'sort_order', 'created_at')
    list_filter = ('is_active', 'created_at')
    search_fields = ('title', 'slug', 'content')
    prepopulated_fields = {'slug': ('title',)}
    ordering = ('sort_order', 'title')
    
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('title', 'slug', 'content')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description', 'meta_keywords'),
            'classes': ('collapse',)
        }),
        ('نمایش', {
            'fields': ('is_active', 'sort_order')
        }),
    )

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'is_active', 'sort_order', 'created_at')
    list_filter = ('is_active', 'category', 'created_at')
    search_fields = ('question', 'answer', 'category')
    ordering = ('sort_order', 'question')

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('type', 'title', 'value', 'is_active', 'sort_order')
    list_filter = ('type', 'is_active')
    search_fields = ('title', 'value')
    ordering = ('sort_order', 'type')

@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    list_display = ('key', 'value', 'description', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('key', 'description')
    ordering = ('key',)

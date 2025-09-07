from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'phone_number', 'city', 'is_active', 'date_joined')
    list_filter = ('is_active', 'is_staff', 'is_superuser', 'city', 'newsletter_subscription', 'date_joined')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'phone_number', 'national_code')
    ordering = ('-date_joined',)
    
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('اطلاعات شخصی', {'fields': ('first_name', 'last_name', 'email', 'phone_number', 'national_code', 'birth_date')}),
        ('آدرس', {'fields': ('address', 'city', 'postal_code')}),
        ('تنظیمات', {'fields': ('newsletter_subscription', 'marketing_emails')}),
        ('دسترسی‌ها', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('تاریخ‌های مهم', {'fields': ('last_login', 'date_joined')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'first_name', 'last_name', 'phone_number'),
        }),
    )

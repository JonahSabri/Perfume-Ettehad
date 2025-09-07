from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    """Custom user model for the store"""
    
    # Personal Information
    phone_number = models.CharField(max_length=15, blank=True, verbose_name=_('شماره تلفن'))
    national_code = models.CharField(max_length=10, blank=True, verbose_name=_('کد ملی'))
    birth_date = models.DateField(null=True, blank=True, verbose_name=_('تاریخ تولد'))
    
    # Address Information
    address = models.TextField(blank=True, verbose_name=_('آدرس'))
    city = models.CharField(max_length=100, blank=True, verbose_name=_('شهر'))
    postal_code = models.CharField(max_length=10, blank=True, verbose_name=_('کد پستی'))
    
    # Preferences
    newsletter_subscription = models.BooleanField(default=True, verbose_name=_('عضویت در خبرنامه'))
    marketing_emails = models.BooleanField(default=True, verbose_name=_('ایمیل‌های تبلیغاتی'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('کاربر')
        verbose_name_plural = _('کاربران')
        ordering = ['-date_joined']
    
    def __str__(self):
        return f"{self.get_full_name()} ({self.username})"
    
    @property
    def full_name(self):
        """Return full name of user"""
        return self.get_full_name()
    
    @property
    def is_complete_profile(self):
        """Check if user profile is complete"""
        return bool(self.phone_number and self.address and self.city)

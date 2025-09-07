from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField

class Page(models.Model):
    """Static pages model"""
    
    title = models.CharField(max_length=200, verbose_name=_('عنوان'))
    slug = models.SlugField(max_length=200, unique=True, verbose_name=_('اسلاگ'))
    content = RichTextField(verbose_name=_('محتوای'))
    
    # SEO
    meta_title = models.CharField(max_length=200, blank=True, verbose_name=_('عنوان متا'))
    meta_description = models.TextField(blank=True, verbose_name=_('توضیحات متا'))
    meta_keywords = models.CharField(max_length=500, blank=True, verbose_name=_('کلمات کلیدی متا'))
    
    # Display
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('صفحه')
        verbose_name_plural = _('صفحات')
        ordering = ['sort_order', 'title']
    
    def __str__(self):
        return self.title

class FAQ(models.Model):
    """FAQ model"""
    
    question = models.CharField(max_length=500, verbose_name=_('سوال'))
    answer = RichTextField(verbose_name=_('پاسخ'))
    category = models.CharField(max_length=100, blank=True, verbose_name=_('دسته‌بندی'))
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    
    class Meta:
        verbose_name = _('سوال متداول')
        verbose_name_plural = _('سوالات متداول')
        ordering = ['sort_order', 'question']
    
    def __str__(self):
        return self.question

class ContactInfo(models.Model):
    """Contact information model"""
    
    CONTACT_TYPE_CHOICES = [
        ('phone', _('تلفن')),
        ('email', _('ایمیل')),
        ('address', _('آدرس')),
        ('social', _('شبکه اجتماعی')),
    ]
    
    type = models.CharField(max_length=20, choices=CONTACT_TYPE_CHOICES, verbose_name=_('نوع'))
    title = models.CharField(max_length=100, verbose_name=_('عنوان'))
    value = models.CharField(max_length=500, verbose_name=_('مقدار'))
    icon = models.CharField(max_length=50, blank=True, verbose_name=_('آیکون'))
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    
    class Meta:
        verbose_name = _('اطلاعات تماس')
        verbose_name_plural = _('اطلاعات تماس')
        ordering = ['sort_order', 'type']
    
    def __str__(self):
        return f"{self.get_type_display()} - {self.title}"

class SiteSetting(models.Model):
    """Site settings model"""
    
    key = models.CharField(max_length=100, unique=True, verbose_name=_('کلید'))
    value = models.TextField(verbose_name=_('مقدار'))
    description = models.CharField(max_length=200, blank=True, verbose_name=_('توضیحات'))
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    
    class Meta:
        verbose_name = _('تنظیم سایت')
        verbose_name_plural = _('تنظیمات سایت')
    
    def __str__(self):
        return f"{self.key} - {self.description}"

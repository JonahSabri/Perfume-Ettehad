from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from ckeditor.fields import RichTextField

class Category(models.Model):
    """Category model for organizing products"""
    
    name = models.CharField(max_length=100, verbose_name=_('نام'))
    slug = models.SlugField(max_length=100, unique=True, verbose_name=_('اسلاگ'))
    description = RichTextField(blank=True, verbose_name=_('توضیحات'))
    image = models.ImageField(upload_to='categories/', blank=True, null=True, verbose_name=_('تصویر'))
    icon = models.CharField(max_length=50, blank=True, verbose_name=_('آیکون'))
    
    # SEO
    meta_title = models.CharField(max_length=200, blank=True, verbose_name=_('عنوان متا'))
    meta_description = models.TextField(blank=True, verbose_name=_('توضیحات متا'))
    meta_keywords = models.CharField(max_length=500, blank=True, verbose_name=_('کلمات کلیدی متا'))
    
    # Display
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    is_featured = models.BooleanField(default=False, verbose_name=_('ویژه'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('دسته‌بندی')
        verbose_name_plural = _('دسته‌بندی‌ها')
        ordering = ['sort_order', 'name']
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('category_detail', kwargs={'slug': self.slug})
    
    @property
    def products_count(self):
        """Return number of active products in this category"""
        return self.products.filter(is_active=True).count()
    
    @property
    def display_name(self):
        """Return display name with count"""
        return f"{self.name} ({self.products_count})"

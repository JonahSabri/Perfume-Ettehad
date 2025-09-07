from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from ckeditor.fields import RichTextField

class Brand(models.Model):
    """Brand model for perfume brands"""
    
    name = models.CharField(max_length=100, verbose_name=_('نام'))
    slug = models.SlugField(max_length=100, unique=True, verbose_name=_('اسلاگ'))
    description = RichTextField(blank=True, verbose_name=_('توضیحات'))
    logo = models.ImageField(upload_to='brands/logos/', blank=True, null=True, verbose_name=_('لوگو'))
    banner = models.ImageField(upload_to='brands/banners/', blank=True, null=True, verbose_name=_('بنر'))
    
    # Company Info
    website = models.URLField(blank=True, verbose_name=_('وب‌سایت'))
    country = models.CharField(max_length=100, blank=True, verbose_name=_('کشور'))
    founded_year = models.IntegerField(blank=True, null=True, verbose_name=_('سال تاسیس'))
    
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
        verbose_name = _('برند')
        verbose_name_plural = _('برندها')
        ordering = ['sort_order', 'name']
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('brand_detail', kwargs={'slug': self.slug})
    
    @property
    def products_count(self):
        """Return number of active products for this brand"""
        return self.products.filter(is_active=True).count()
    
    @property
    def display_name(self):
        """Return display name with count"""
        return f"{self.name} ({self.products_count})"

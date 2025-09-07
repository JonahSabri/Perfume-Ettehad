from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from ckeditor.fields import RichTextField
from users.models import CustomUser

class BlogCategory(models.Model):
    """Blog category model"""
    
    name = models.CharField(max_length=100, verbose_name=_('نام'))
    slug = models.SlugField(max_length=100, unique=True, verbose_name=_('اسلاگ'))
    description = models.TextField(blank=True, verbose_name=_('توضیحات'))
    image = models.ImageField(upload_to='blog/categories/', blank=True, null=True, verbose_name=_('تصویر'))
    
    # SEO
    meta_title = models.CharField(max_length=200, blank=True, verbose_name=_('عنوان متا'))
    meta_description = models.TextField(blank=True, verbose_name=_('توضیحات متا'))
    
    # Display
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('دسته‌بندی بلاگ')
        verbose_name_plural = _('دسته‌بندی‌های بلاگ')
        ordering = ['sort_order', 'name']
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('blog_category', kwargs={'slug': self.slug})

class BlogPost(models.Model):
    """Blog post model"""
    
    STATUS_CHOICES = [
        ('draft', _('پیش‌نویس')),
        ('published', _('منتشر شده')),
        ('archived', _('آرشیو شده')),
    ]
    
    # Basic Information
    title = models.CharField(max_length=200, verbose_name=_('عنوان'))
    slug = models.SlugField(max_length=200, unique=True, verbose_name=_('اسلاگ'))
    excerpt = models.TextField(max_length=500, blank=True, verbose_name=_('خلاصه'))
    content = RichTextField(verbose_name=_('محتوای'))
    
    # Relationships
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='blog_posts', verbose_name=_('نویسنده'))
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE, related_name='posts', verbose_name=_('دسته‌بندی'))
    
    # Images
    featured_image = models.ImageField(upload_to='blog/posts/', verbose_name=_('تصویر شاخص'))
    
    # SEO
    meta_title = models.CharField(max_length=200, blank=True, verbose_name=_('عنوان متا'))
    meta_description = models.TextField(blank=True, verbose_name=_('توضیحات متا'))
    meta_keywords = models.CharField(max_length=500, blank=True, verbose_name=_('کلمات کلیدی متا'))
    
    # Display
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft', verbose_name=_('وضعیت'))
    is_featured = models.BooleanField(default=False, verbose_name=_('ویژه'))
    allow_comments = models.BooleanField(default=True, verbose_name=_('اجازه نظرات'))
    
    # Statistics
    views_count = models.PositiveIntegerField(default=0, verbose_name=_('تعداد بازدید'))
    likes_count = models.PositiveIntegerField(default=0, verbose_name=_('تعداد لایک'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    published_at = models.DateTimeField(null=True, blank=True, verbose_name=_('تاریخ انتشار'))
    
    class Meta:
        verbose_name = _('پست بلاگ')
        verbose_name_plural = _('پست‌های بلاگ')
        ordering = ['-published_at', '-created_at']
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('blog_post', kwargs={'slug': self.slug})
    
    def increment_views(self):
        """Increment view count"""
        self.views_count += 1
        self.save(update_fields=['views_count'])
    
    def save(self, *args, **kwargs):
        if self.status == 'published' and not self.published_at:
            from django.utils import timezone
            self.published_at = timezone.now()
        super().save(*args, **kwargs)

class BlogComment(models.Model):
    """Blog comment model"""
    
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments', verbose_name=_('پست'))
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='blog_comments', verbose_name=_('کاربر'))
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies', verbose_name=_('پاسخ به'))
    
    content = models.TextField(verbose_name=_('محتوا'))
    is_approved = models.BooleanField(default=False, verbose_name=_('تایید شده'))
    
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    
    class Meta:
        verbose_name = _('نظر بلاگ')
        verbose_name_plural = _('نظرات بلاگ')
        ordering = ['-created_at']
    
    def __str__(self):
        return f"نظر {self.user.username} در {self.post.title}"

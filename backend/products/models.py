from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from django.core.validators import MinValueValidator, MaxValueValidator
from ckeditor.fields import RichTextField
from categories.models import Category
from brands.models import Brand

class Product(models.Model):
    """Product model for perfumes and colognes"""
    
    GENDER_CHOICES = [
        ('men', _('مردانه')),
        ('women', _('زنانه')),
        ('unisex', _('یونیسکس')),
    ]
    
    SIZE_CHOICES = [
        ('30ml', '30ml'),
        ('50ml', '50ml'),
        ('75ml', '75ml'),
        ('100ml', '100ml'),
        ('125ml', '125ml'),
        ('150ml', '150ml'),
        ('200ml', '200ml'),
    ]
    
    # Basic Information
    name = models.CharField(max_length=200, verbose_name=_('نام'))
    slug = models.SlugField(max_length=200, unique=True, verbose_name=_('اسلاگ'))
    description = RichTextField(verbose_name=_('توضیحات'))
    short_description = models.TextField(max_length=500, blank=True, verbose_name=_('توضیحات کوتاه'))
    
    # Relationships
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', verbose_name=_('دسته‌بندی'))
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products', verbose_name=_('برند'))
    
    # Product Details
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, verbose_name=_('جنسیت'))
    size = models.CharField(max_length=10, choices=SIZE_CHOICES, verbose_name=_('حجم'))
    concentration = models.CharField(max_length=50, blank=True, verbose_name=_('غلظت'))
    notes = models.TextField(blank=True, verbose_name=_('نت‌های عطر'))
    
    # Pricing
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name=_('قیمت'))
    original_price = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True, verbose_name=_('قیمت اصلی'))
    discount_percentage = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)], verbose_name=_('درصد تخفیف'))
    
    # Stock
    stock_quantity = models.PositiveIntegerField(default=0, verbose_name=_('موجودی'))
    is_in_stock = models.BooleanField(default=True, verbose_name=_('موجود'))
    sku = models.CharField(max_length=50, unique=True, verbose_name=_('کد محصول'))
    
    # Images
    main_image = models.ImageField(upload_to='products/main/', verbose_name=_('تصویر اصلی'))
    
    # SEO
    meta_title = models.CharField(max_length=200, blank=True, verbose_name=_('عنوان متا'))
    meta_description = models.TextField(blank=True, verbose_name=_('توضیحات متا'))
    meta_keywords = models.CharField(max_length=500, blank=True, verbose_name=_('کلمات کلیدی متا'))
    
    # Display
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    is_featured = models.BooleanField(default=False, verbose_name=_('ویژه'))
    is_new = models.BooleanField(default=False, verbose_name=_('جدید'))
    is_bestseller = models.BooleanField(default=False, verbose_name=_('پرفروش'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    
    # Statistics
    views_count = models.PositiveIntegerField(default=0, verbose_name=_('تعداد بازدید'))
    sales_count = models.PositiveIntegerField(default=0, verbose_name=_('تعداد فروش'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('محصول')
        verbose_name_plural = _('محصولات')
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.brand.name} - {self.name}"
    
    def get_absolute_url(self):
        return reverse('product_detail', kwargs={'slug': self.slug})
    
    @property
    def final_price(self):
        """Calculate final price after discount"""
        if self.original_price and self.discount_percentage > 0:
            from decimal import Decimal
            discount_factor = Decimal('1') - (Decimal(str(self.discount_percentage)) / Decimal('100'))
            return self.original_price * discount_factor
        return self.price
    
    @property
    def discount_amount(self):
        """Calculate discount amount"""
        if self.original_price and self.discount_percentage > 0:
            from decimal import Decimal
            return self.original_price - self.final_price
        return Decimal('0')
    
    @property
    def is_on_sale(self):
        """Check if product is on sale"""
        return self.original_price and self.discount_percentage > 0
    
    def increment_views(self):
        """Increment view count"""
        self.views_count += 1
        self.save(update_fields=['views_count'])

class ProductImage(models.Model):
    """Product images model"""
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images', verbose_name=_('محصول'))
    image = models.ImageField(upload_to='products/images/', verbose_name=_('تصویر'))
    alt_text = models.CharField(max_length=200, blank=True, verbose_name=_('متن جایگزین'))
    is_primary = models.BooleanField(default=False, verbose_name=_('تصویر اصلی'))
    sort_order = models.IntegerField(default=0, verbose_name=_('ترتیب نمایش'))
    
    class Meta:
        verbose_name = _('تصویر محصول')
        verbose_name_plural = _('تصاویر محصولات')
        ordering = ['sort_order']
    
    def __str__(self):
        return f"{self.product.name} - {self.alt_text or 'تصویر'}"

class ProductReview(models.Model):
    """Product reviews model"""
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews', verbose_name=_('محصول'))
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE, related_name='reviews', verbose_name=_('کاربر'))
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)], verbose_name=_('امتیاز'))
    title = models.CharField(max_length=200, verbose_name=_('عنوان'))
    comment = models.TextField(verbose_name=_('نظر'))
    is_approved = models.BooleanField(default=False, verbose_name=_('تایید شده'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    
    class Meta:
        verbose_name = _('نظر محصول')
        verbose_name_plural = _('نظرات محصولات')
        ordering = ['-created_at']
        unique_together = ['product', 'user']
    
    def __str__(self):
        return f"{self.product.name} - {self.user.username} - {self.rating}/5"

class ProductVariant(models.Model):
    """Product variants model (different sizes, etc.)"""
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants', verbose_name=_('محصول'))
    size = models.CharField(max_length=10, choices=Product.SIZE_CHOICES, verbose_name=_('حجم'))
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name=_('قیمت'))
    original_price = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True, verbose_name=_('قیمت اصلی'))
    stock_quantity = models.PositiveIntegerField(default=0, verbose_name=_('موجودی'))
    sku = models.CharField(max_length=50, unique=True, verbose_name=_('کد محصول'))
    is_active = models.BooleanField(default=True, verbose_name=_('فعال'))
    
    class Meta:
        verbose_name = _('تنوع محصول')
        verbose_name_plural = _('تنوع‌های محصول')
        unique_together = ['product', 'size']
    
    def __str__(self):
        return f"{self.product.name} - {self.size}"

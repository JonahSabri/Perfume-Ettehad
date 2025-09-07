from django.contrib import admin
from .models import Product, ProductImage, ProductReview, ProductVariant

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ('image', 'alt_text', 'is_primary', 'sort_order')

class ProductVariantInline(admin.TabularInline):
    model = ProductVariant
    extra = 1
    fields = ('size', 'price', 'original_price', 'stock_quantity', 'sku', 'is_active')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'category', 'gender', 'price', 'final_price', 'is_active', 'is_featured', 'stock_quantity', 'views_count')
    list_filter = ('is_active', 'is_featured', 'is_new', 'is_bestseller', 'gender', 'category', 'brand', 'created_at')
    search_fields = ('name', 'slug', 'sku', 'description')
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ('views_count', 'sales_count', 'created_at', 'updated_at')
    inlines = [ProductImageInline, ProductVariantInline]
    
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('name', 'slug', 'description', 'short_description', 'main_image')
        }),
        ('دسته‌بندی و برند', {
            'fields': ('category', 'brand')
        }),
        ('جزئیات محصول', {
            'fields': ('gender', 'size', 'concentration', 'notes')
        }),
        ('قیمت‌گذاری', {
            'fields': ('price', 'original_price', 'discount_percentage')
        }),
        ('موجودی', {
            'fields': ('stock_quantity', 'is_in_stock', 'sku')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description', 'meta_keywords'),
            'classes': ('collapse',)
        }),
        ('نمایش', {
            'fields': ('is_active', 'is_featured', 'is_new', 'is_bestseller', 'sort_order')
        }),
        ('آمار', {
            'fields': ('views_count', 'sales_count'),
            'classes': ('collapse',)
        }),
    )
    
    def final_price(self, obj):
        return f"{obj.final_price:,} تومان"
    final_price.short_description = 'قیمت نهایی'

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'alt_text', 'is_primary', 'sort_order')
    list_filter = ('is_primary',)
    search_fields = ('product__name', 'alt_text')
    ordering = ('product', 'sort_order')

@admin.register(ProductReview)
class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'user', 'rating', 'title', 'is_approved', 'created_at')
    list_filter = ('rating', 'is_approved', 'created_at')
    search_fields = ('product__name', 'user__username', 'title', 'comment')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)

@admin.register(ProductVariant)
class ProductVariantAdmin(admin.ModelAdmin):
    list_display = ('product', 'size', 'price', 'stock_quantity', 'is_active')
    list_filter = ('size', 'is_active')
    search_fields = ('product__name', 'sku')
    ordering = ('product', 'size')

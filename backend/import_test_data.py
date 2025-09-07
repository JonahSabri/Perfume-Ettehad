#!/usr/bin/env python
"""
Django Management Command to Import Test Data
Usage: python manage.py shell < import_test_data.py
"""

import os
import sys
import django
from decimal import Decimal

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ettehad_store.settings')
django.setup()

from django.contrib.auth import get_user_model
from categories.models import Category
from brands.models import Brand
from products.models import Product, ProductImage, ProductReview, ProductVariant
from pages.models import Page, FAQ, ContactInfo, SiteSetting
from blog.models import BlogCategory, BlogPost, BlogComment
from orders.models import Order, OrderItem, Cart, CartItem

User = get_user_model()

def clear_database():
    """Clear all data from database to avoid duplicates"""
    print("Clearing existing data...")
    
    from django.db import connection
    cursor = connection.cursor()
    
    # Disable foreign key constraints temporarily
    cursor.execute("PRAGMA foreign_keys=OFF;")
    
    # Get all table names
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    
    # Clear all tables except django_migrations and sqlite_sequence
    for table in tables:
        table_name = table[0]
        if table_name not in ['django_migrations', 'sqlite_sequence']:
            cursor.execute(f"DELETE FROM {table_name};")
    
    # Re-enable foreign key constraints
    cursor.execute("PRAGMA foreign_keys=ON;")
    
    print("Database cleared successfully!")

def create_test_data():
    """Create test data for all models using frontend UI data"""
    
    print("Starting to import test data...")
    
    # Clear database first
    clear_database()
    
    # Create Categories (from category-icons.tsx)
    categories_data = [
        {'name': 'ترند و جدید', 'slug': 'trending', 'description': 'جدیدترین و ترندترین عطرها'},
        {'name': 'عطر زنانه', 'slug': 'women', 'description': 'مجموعه کامل عطرهای زنانه'},
        {'name': 'عطر مردانه', 'slug': 'men', 'description': 'بهترین عطرهای مردانه'},
        {'name': 'ادکلن', 'slug': 'cologne', 'description': 'ادکلن‌های با کیفیت'},
        {'name': 'عطر یونیسکس', 'slug': 'unisex', 'description': 'عطرهای مناسب همه'},
        {'name': 'ست هدیه', 'slug': 'gift-sets', 'description': 'ست‌های هدیه ویژه'},
        {'name': 'برندهای لوکس', 'slug': 'luxury', 'description': 'برندهای لوکس و معتبر'},
        {'name': 'پرفروش‌ترین', 'slug': 'bestsellers', 'description': 'پرفروش‌ترین محصولات'}
    ]
    
    categories = []
    for cat_data in categories_data:
        category, created = Category.objects.get_or_create(
            slug=cat_data['slug'],
            defaults=cat_data
        )
        categories.append(category)
        if created:
            print(f"Created category: {category.name}")
    
    # Create Brands (from featured-products.tsx)
    brands_data = [
        {'name': 'Chanel', 'slug': 'chanel', 'description': 'برند لوکس فرانسوی'},
        {'name': 'Dior', 'slug': 'dior', 'description': 'خانه مد دیور'},
        {'name': 'Tom Ford', 'slug': 'tom-ford', 'description': 'عطرهای لوکس تام فورد'},
        {'name': 'Armani', 'slug': 'armani', 'description': 'برند ایتالیایی آرمانی'}
    ]
    
    brands = []
    for brand_data in brands_data:
        brand, created = Brand.objects.get_or_create(
            slug=brand_data['slug'],
            defaults=brand_data
        )
        brands.append(brand)
        if created:
            print(f"Created brand: {brand.name}")
    
    # Create Products (from featured-products.tsx)
    products_data = [
        {
            'name': 'شانل نامبر ۵',
            'slug': 'chanel-number-5',
            'brand': brands[0],  # Chanel
            'category': categories[1],  # عطر زنانه
            'description': 'عطر افسانه‌ای شانل نامبر ۵',
            'short_description': 'عطر افسانه‌ای شانل نامبر ۵',
            'gender': 'women',
            'size': '50ml',
            'price': Decimal('3500000'),
            'original_price': Decimal('4200000'),
            'stock_quantity': 50,
            'sku': 'CHANEL-001',
            'is_featured': True,
            'is_new': True,
            'discount_percentage': 17
        },
        {
            'name': 'دیور ساواژ',
            'slug': 'dior-sauvage',
            'brand': brands[1],  # Dior
            'category': categories[2],  # عطر مردانه
            'description': 'عطر مردانه دیور ساواژ',
            'short_description': 'عطر مردانه دیور ساواژ',
            'gender': 'men',
            'size': '50ml',
            'price': Decimal('2800000'),
            'original_price': Decimal('3300000'),
            'stock_quantity': 30,
            'sku': 'DIOR-001',
            'is_featured': True,
            'is_new': False,
            'discount_percentage': 15
        },
        {
            'name': 'تام فورد بلک ارکید',
            'slug': 'tom-ford-black-orchid',
            'brand': brands[2],  # Tom Ford
            'category': categories[6],  # برندهای لوکس
            'description': 'عطر لوکس تام فورد بلک ارکید',
            'short_description': 'عطر لوکس تام فورد بلک ارکید',
            'gender': 'unisex',
            'size': '50ml',
            'price': Decimal('4500000'),
            'original_price': Decimal('5200000'),
            'stock_quantity': 20,
            'sku': 'TOM-FORD-001',
            'is_featured': True,
            'is_new': True,
            'discount_percentage': 13
        },
        {
            'name': 'آرمانی کد',
            'slug': 'armani-code',
            'brand': brands[3],  # Armani
            'category': categories[2],  # عطر مردانه
            'description': 'عطر مردانه آرمانی کد',
            'short_description': 'عطر مردانه آرمانی کد',
            'gender': 'men',
            'size': '50ml',
            'price': Decimal('2200000'),
            'original_price': Decimal('2600000'),
            'stock_quantity': 40,
            'sku': 'ARMANI-001',
            'is_featured': True,
            'is_new': False,
            'discount_percentage': 15
        }
    ]
    
    products = []
    for product_data in products_data:
        product, created = Product.objects.get_or_create(
            slug=product_data['slug'],
            defaults=product_data
        )
        products.append(product)
        if created:
            print(f"Created product: {product.name}")
    
    # Create Product Variants
    for product in products:
        variant, created = ProductVariant.objects.get_or_create(
            product=product,
            sku=f"{product.slug}-50ml",
            defaults={
                'size': '50ml',
                'price': product.price,
                'stock_quantity': product.stock_quantity,
                'is_active': True
            }
        )
        if created:
            print(f"Created variant for {product.name}")
    
    # Create a test user first (needed for reviews and blog posts)
    user, created = User.objects.get_or_create(
        username='testuser',
        defaults={
            'email': 'test@example.com',
            'first_name': 'کاربر',
            'last_name': 'تست',
            'phone_number': '۰۹۱۲۳۴۵۶۷۸۹',
            'is_active': True
        }
    )
    if created:
        user.set_password('testpass123')
        user.save()
        print(f"Created test user: {user.username}")
    
    # Create Product Reviews
    review_texts = [
        'عالی! بوی فوق‌العاده‌ای دارد',
        'کیفیت عالی و ماندگاری خوب',
        'ارزش خرید دارد، توصیه می‌کنم',
        'بسته‌بندی زیبا و محصول با کیفیت'
    ]
    
    # Create additional test users for reviews
    test_users = []
    for i in range(4):
        test_user, created = User.objects.get_or_create(
            username=f'testuser{i+1}',
            defaults={
                'email': f'test{i+1}@example.com',
                'first_name': f'کاربر {i+1}',
                'last_name': 'تست',
                'phone_number': f'۰۹۱۲۳۴۵۶۷۸{i}',
                'is_active': True
            }
        )
        if created:
            test_user.set_password('testpass123')
            test_user.save()
            print(f"Created test user: {test_user.username}")
        test_users.append(test_user)
    
    for product in products:
        for i, text in enumerate(review_texts):
            review, created = ProductReview.objects.get_or_create(
                product=product,
                user=test_users[i],  # Use different user for each review
                defaults={
                    'rating': 4 + (i % 2),  # 4 or 5 stars
                    'title': f'نظر کاربر {i+1}',
                    'comment': text,
                    'is_approved': True
                }
            )
            if created:
                print(f"Created review for {product.name}")
    
    # Create Pages (from about/page.tsx content)
    pages_data = [
        {
            'title': 'درباره ما',
            'slug': 'about',
            'content': 'فروشگاه آنلاین عطر و ادکلن اتحاد، ارائه دهنده بهترین برندهای عطر جهان با ضمانت اصالت ۱۰۰٪',
            'is_active': True
        },
        {
            'title': 'حریم خصوصی',
            'slug': 'privacy',
            'content': 'سیاست حفظ حریم خصوصی مشتریان',
            'is_active': True
        },
        {
            'title': 'قوانین و مقررات',
            'slug': 'terms',
            'content': 'قوانین و مقررات استفاده از سایت',
            'is_active': True
        }
    ]
    
    for page_data in pages_data:
        page, created = Page.objects.get_or_create(
            slug=page_data['slug'],
            defaults=page_data
        )
        if created:
            print(f"Created page: {page.title}")
    
    # Create FAQs
    faqs_data = [
        {
            'question': 'آیا محصولات شما اصل هستند؟',
            'answer': 'بله، تمام محصولات ما با ضمانت اصالت ۱۰۰٪ ارائه می‌شوند.'
        },
        {
            'question': 'زمان ارسال چقدر است؟',
            'answer': 'ارسال در تهران ۲۴ ساعته و در سایر شهرها ۲-۳ روز کاری است.'
        },
        {
            'question': 'آیا امکان بازگشت وجود دارد؟',
            'answer': 'بله، تا ۷ روز پس از دریافت امکان بازگشت محصول وجود دارد.'
        }
    ]
    
    for faq_data in faqs_data:
        faq, created = FAQ.objects.get_or_create(
            question=faq_data['question'],
            defaults=faq_data
        )
        if created:
            print(f"Created FAQ: {faq.question}")
    
    # Create Contact Info
    contact_data = [
        {'type': 'phone', 'value': '۰۲۱-۱۲۳۴۵۶۷۸', 'is_active': True},
        {'type': 'email', 'value': 'info@ettehad-perfume.com', 'is_active': True},
        {'type': 'address', 'value': 'تهران، خیابان ولیعصر', 'is_active': True}
    ]
    
    for contact_data_item in contact_data:
        contact, created = ContactInfo.objects.get_or_create(
            type=contact_data_item['type'],
            defaults=contact_data_item
        )
        if created:
            print(f"Created contact info: {contact.type}")
    
    # Create Site Settings
    settings_data = [
        {'key': 'site_name', 'value': 'فروشگاه عطر اتحاد', 'is_active': True},
        {'key': 'site_description', 'value': 'بهترین برندهای عطر جهان', 'is_active': True},
        {'key': 'free_shipping_threshold', 'value': '۵۰۰,۰۰۰', 'is_active': True}
    ]
    
    for setting_data in settings_data:
        setting, created = SiteSetting.objects.get_or_create(
            key=setting_data['key'],
            defaults=setting_data
        )
        if created:
            print(f"Created site setting: {setting.key}")
    
    # Create Blog Categories
    blog_categories_data = [
        {'name': 'راهنمای خرید', 'slug': 'shopping-guide'},
        {'name': 'مراقبت از عطر', 'slug': 'perfume-care'},
        {'name': 'برندها', 'slug': 'brands'}
    ]
    
    blog_categories = []
    for cat_data in blog_categories_data:
        category, created = BlogCategory.objects.get_or_create(
            slug=cat_data['slug'],
            defaults=cat_data
        )
        blog_categories.append(category)
        if created:
            print(f"Created blog category: {category.name}")
    
    # Create Blog Posts
    blog_posts_data = [
        {
            'title': 'راهنمای انتخاب عطر مناسب',
            'slug': 'perfume-selection-guide',
            'category': blog_categories[0],
            'content': 'نکات مهم در انتخاب عطر مناسب برای هر مناسبت',
            'excerpt': 'انتخاب عطر مناسب یکی از مهم‌ترین تصمیمات است...',
            'status': 'published'
        },
        {
            'title': 'نحوه نگهداری صحیح از عطر',
            'slug': 'perfume-storage-guide',
            'category': blog_categories[1],
            'content': 'راهنمای کامل نگهداری و مراقبت از عطرها',
            'excerpt': 'نگهداری صحیح از عطر باعث افزایش ماندگاری آن می‌شود...',
            'status': 'published'
        }
    ]
    

    
    for post_data in blog_posts_data:
        post_data['author'] = user  # Add author to each post
        post, created = BlogPost.objects.get_or_create(
            slug=post_data['slug'],
            defaults=post_data
        )
        if created:
            print(f"Created blog post: {post.title}")
    

    
    # Create a test order
    if products:
        order, created = Order.objects.get_or_create(
            user=user,
            order_number='ORD-001',
            defaults={
                'status': 'pending',
                'payment_method': 'online',
                'payment_status': False,
                'subtotal': products[0].price,
                'shipping_cost': 50000,  # 50,000 تومان
                'discount_amount': 0,
                'total_amount': products[0].price + 50000,
                'shipping_address': 'تهران، خیابان ولیعصر',
                'shipping_city': 'تهران',
                'shipping_postal_code': '1234567890',
                'shipping_phone': '۰۹۱۲۳۴۵۶۷۸۹'
            }
        )
        if created:
            OrderItem.objects.create(
                order=order,
                product=products[0],
                quantity=1,
                unit_price=products[0].price,
                total_price=products[0].price
            )
            print(f"Created test order: {order.order_number}")
    
    # Create a test cart
    cart, created = Cart.objects.get_or_create(
        user=user,
        defaults={}
    )
    if created:
        if products:
            CartItem.objects.create(
                cart=cart,
                product=products[0],
                quantity=1
            )
        print(f"Created test cart for user: {user.username}")
    
    print("\n✅ Test data import completed successfully!")
    print(f"Created: {len(categories)} categories, {len(brands)} brands, {len(products)} products")
    print("You can now access the Django admin at /admin/ to view the imported data.")

if __name__ == '__main__':
    create_test_data()

# Test Data Import Guide

This guide explains how to import test data into the Django backend using the existing frontend UI data.

## Overview

The `import_test_data.py` script creates sample data for all Django models using information extracted from the frontend UI components:

- **Categories**: From `components/category-icons.tsx` (8 categories)
- **Brands**: From `components/featured-products.tsx` (4 brands: Chanel, Dior, Tom Ford, Armani)
- **Products**: From `components/featured-products.tsx` (4 products with pricing, discounts, ratings)
- **Pages**: Static pages like About, Privacy, Terms
- **FAQs**: Common customer questions
- **Blog**: Sample blog categories and posts
- **Users**: Test user account
- **Orders**: Sample order with items
- **Carts**: Sample shopping cart

## Prerequisites

1. Make sure you have Django installed and the backend is set up
2. Navigate to the backend directory
3. Create and activate a virtual environment (recommended)

## Installation Steps

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Run Django Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Create a Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 4. Import Test Data

There are two ways to run the import script:

#### Method 1: Using Django Shell

```bash
python manage.py shell < import_test_data.py
```

#### Method 2: Direct Python Execution

```bash
python import_test_data.py
```

## What Gets Created

### Categories (8 items)
- ترند و جدید (Trending)
- عطر زنانه (Women's Perfumes)
- عطر مردانه (Men's Perfumes)
- ادکلن (Cologne)
- عطر یونیسکس (Unisex)
- ست هدیه (Gift Sets)
- برندهای لوکس (Luxury Brands)
- پرفروش‌ترین (Bestsellers)

### Brands (4 items)
- Chanel
- Dior
- Tom Ford
- Armani

### Products (4 items)
- شانل نامبر ۵ (Chanel No. 5) - 3,500,000 تومان
- دیور ساواژ (Dior Sauvage) - 2,800,000 تومان
- تام فورد بلک ارکید (Tom Ford Black Orchid) - 4,500,000 تومان
- آرمانی کد (Armani Code) - 2,200,000 تومان

### Additional Data
- Product variants (50ml for each product)
- Product reviews (4 reviews per product)
- Static pages (About, Privacy, Terms)
- FAQs (3 common questions)
- Contact information
- Site settings
- Blog categories and posts
- Test user account
- Sample order and cart

## Test User Account

A test user is created with the following credentials:
- **Username**: `testuser`
- **Password**: `testpass123`
- **Email**: `test@example.com`

## Verification

After running the import script, you can verify the data by:

1. **Django Admin**: Visit `/admin/` and log in with your superuser credentials
2. **API Endpoints**: Test the REST API endpoints at `/api/`
3. **Database**: Check the database directly

## API Endpoints to Test

Once the data is imported, you can test these API endpoints:

- `GET /api/categories/` - List all categories
- `GET /api/brands/` - List all brands
- `GET /api/products/` - List all products
- `GET /api/products/{id}/` - Get specific product details
- `GET /api/pages/` - List static pages
- `GET /api/faqs/` - List FAQs

## Customization

You can modify the `import_test_data.py` script to:

- Add more test data
- Change product prices, descriptions, or categories
- Add more brands or categories
- Modify user information
- Add more blog posts or pages

## Troubleshooting

### Common Issues

1. **Import Errors**: Make sure all Django apps are properly installed in `settings.py`
2. **Database Errors**: Ensure migrations are run before importing data
3. **Permission Errors**: Make sure you have write permissions to the database

### Reset Data

To start fresh, you can:

```bash
# Delete all data (be careful!)
python manage.py flush

# Or delete specific models
python manage.py shell
>>> from products.models import Product
>>> Product.objects.all().delete()
```

## Notes

- The script uses `get_or_create()` to avoid duplicate entries
- All text is in Persian to match the frontend
- Prices are in تومان (Iranian currency)
- The script is idempotent - running it multiple times won't create duplicates
- Each model gets at least one field populated as requested

## Next Steps

After importing the test data:

1. Test the Django admin interface
2. Verify API endpoints work correctly
3. Connect the frontend to the backend API
4. Add more realistic data as needed
5. Set up proper authentication and permissions

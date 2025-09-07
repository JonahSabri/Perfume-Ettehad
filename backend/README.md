# اتحاد - بک‌اند Django

بک‌اند کامل برای فروشگاه آنلاین عطر و ادکلن اتحاد

## ویژگی‌ها

### 🛍️ **مدیریت محصولات**
- مدیریت کامل محصولات با تصاویر و تنوع‌ها
- دسته‌بندی‌ها و برندها
- سیستم نظرات و امتیازدهی
- مدیریت موجودی و قیمت‌گذاری

### 👥 **مدیریت کاربران**
- سیستم احراز هویت کامل
- پروفایل کاربری با اطلاعات کامل
- مدیریت آدرس‌ها و تنظیمات

### 🛒 **سیستم سفارش**
- سبد خرید پیشرفته
- مدیریت سفارشات
- سیستم پرداخت
- پیگیری سفارشات

### 📝 **مدیریت محتوا**
- صفحات استاتیک
- بلاگ و مقالات
- سوالات متداول
- تنظیمات سایت

### 🔌 **API کامل**
- REST API برای تمام بخش‌ها
- فیلترینگ و جستجو
- احراز هویت و مجوزها
- مستندات API

## نصب و راه‌اندازی

### پیش‌نیازها
- Python 3.8+
- PostgreSQL (اختیاری)
- Redis (برای کش و Celery)

### نصب

1. **کلون کردن پروژه**
```bash
git clone <repository-url>
cd backend
```

2. **ایجاد محیط مجازی**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# یا
venv\Scripts\activate  # Windows
```

3. **نصب وابستگی‌ها**
```bash
pip install -r requirements.txt
```

4. **تنظیم متغیرهای محیطی**
```bash
cp env.example .env
# فایل .env را ویرایش کنید
```

5. **اجرای مایگریشن‌ها**
```bash
python manage.py makemigrations
python manage.py migrate
```

6. **ایجاد سوپر یوزر**
```bash
python manage.py createsuperuser
```

7. **اجرای سرور**
```bash
python manage.py runserver
```

## ساختار پروژه

```
backend/
├── ettehad_store/          # تنظیمات اصلی Django
├── users/                  # مدیریت کاربران
├── categories/             # دسته‌بندی‌ها
├── brands/                 # برندها
├── products/               # محصولات
├── orders/                 # سفارشات و سبد خرید
├── pages/                  # صفحات استاتیک
├── blog/                   # بلاگ
├── api/                    # API
├── media/                  # فایل‌های آپلود شده
├── static/                 # فایل‌های استاتیک
└── requirements.txt        # وابستگی‌ها
```

## API Endpoints

### محصولات
- `GET /api/products/` - لیست محصولات
- `GET /api/products/{id}/` - جزئیات محصول
- `GET /api/products/featured/` - محصولات ویژه
- `GET /api/products/new/` - محصولات جدید

### دسته‌بندی‌ها
- `GET /api/categories/` - لیست دسته‌بندی‌ها
- `GET /api/categories/{id}/` - جزئیات دسته‌بندی

### برندها
- `GET /api/brands/` - لیست برندها
- `GET /api/brands/{id}/` - جزئیات برند

### سبد خرید
- `GET /api/cart/` - مشاهده سبد خرید
- `POST /api/cart/add/` - اضافه کردن به سبد
- `DELETE /api/cart/remove/{id}/` - حذف از سبد
- `PUT /api/cart/update/{id}/` - به‌روزرسانی سبد

### سفارشات
- `GET /api/orders/` - لیست سفارشات کاربر
- `POST /api/orders/` - ایجاد سفارش جدید

### نظرات
- `GET /api/products/{slug}/reviews/` - نظرات محصول
- `POST /api/products/{slug}/add-review/` - افزودن نظر

## مدیریت محتوا

### پنل ادمین
- دسترسی به `http://localhost:8000/admin/`
- مدیریت کامل تمام بخش‌ها
- آپلود تصاویر و فایل‌ها
- ویرایشگر متن پیشرفته (CKEditor)

### ویژگی‌های ادمین
- فیلترینگ و جستجو
- مرتب‌سازی و صفحه‌بندی
- ویرایش گروهی
- آمار و گزارش‌ها

## امنیت

- احراز هویت JWT
- مجوزهای مبتنی بر نقش
- محافظت از CSRF
- رمزگذاری داده‌ها
- لاگ‌گیری کامل

## عملکرد

- کش Redis
- بهینه‌سازی کوئری‌ها
- فشرده‌سازی تصاویر
- CDN آماده
- مانیتورینگ

## توسعه

### تست
```bash
python manage.py test
```

### کد استایل
```bash
flake8 .
black .
```

### مستندات API
- Swagger UI در `/api/`
- ReDoc در `/api/redoc/`

## استقرار

### Docker
```bash
docker-compose up -d
```

### Production
- تنظیم `DEBUG=False`
- استفاده از PostgreSQL
- تنظیم Redis
- CDN برای فایل‌های استاتیک

## پشتیبانی

برای سوالات و مشکلات:
- ایمیل: support@ettehad.com
- تلفن: ۰۲۱-۸۸۷۷۶۶۵۵

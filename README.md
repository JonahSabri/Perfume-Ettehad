# فروشگاه آنلاین عطر اتحاد

یک فروشگاه آنلاین کامل برای فروش عطر و ادکلن با فرانت‌اند Next.js و بک‌اند Django.

## ویژگی‌ها

### فرانت‌اند (Next.js)
- رابط کاربری مدرن و زیبا
- طراحی ریسپانسیو
- جستجو و فیلتر محصولات
- سبد خرید
- صفحات محصولات و دسته‌بندی‌ها
- سیستم امتیازدهی و نظرات

### بک‌اند (Django)
- API کامل با Django REST Framework
- سیستم احراز هویت
- مدیریت محصولات، دسته‌بندی‌ها و برندها
- سیستم سفارش و سبد خرید
- مدیریت محتوا (صفحات، مقالات، سوالات متداول)
- سیستم نظرات و امتیازدهی

## نصب و راه‌اندازی

### پیش‌نیازها
- Python 3.8+
- Node.js 18+
- npm یا pnpm

### راه‌اندازی بک‌اند

1. نصب وابستگی‌های Python:
```bash
cd backend
pip install -r requirements.txt
```

2. اجرای مایگریشن‌ها:
```bash
python manage.py migrate
```

3. ایجاد سوپر یوزر:
```bash
python manage.py createsuperuser
```

4. وارد کردن داده‌های تست:
```bash
python manage.py shell < import_test_data.py
```

5. اجرای سرور Django:
```bash
python manage.py runserver 8000
```

### راه‌اندازی فرانت‌اند

1. نصب وابستگی‌ها:
```bash
npm install
# یا
pnpm install
```

2. اجرای سرور توسعه:
```bash
npm run dev
# یا
pnpm dev
```

## ساختار پروژه

```
├── app/                    # صفحات Next.js
│   ├── page.tsx           # صفحه اصلی
│   ├── products/          # صفحه محصولات
│   ├── product/[id]/      # صفحه جزئیات محصول
│   └── ...
├── components/            # کامپوننت‌های React
│   ├── ui/               # کامپوننت‌های UI
│   ├── featured-products.tsx
│   ├── category-icons.tsx
│   └── ...
├── lib/                  # کتابخانه‌ها و تنظیمات
│   ├── api.ts           # سرویس API
│   ├── config.ts        # تنظیمات
│   └── utils.ts         # توابع کمکی
├── hooks/               # هوک‌های React
│   └── use-api.ts      # هوک‌های API
├── backend/             # پروژه Django
│   ├── api/            # API endpoints
│   ├── products/       # مدل محصولات
│   ├── categories/     # مدل دسته‌بندی‌ها
│   ├── brands/         # مدل برندها
│   ├── orders/         # مدل سفارشات
│   └── ...
└── public/             # فایل‌های استاتیک
```

## API Endpoints

### محصولات
- `GET /api/products/` - لیست محصولات
- `GET /api/products/{slug}/` - جزئیات محصول
- `GET /api/products/featured/` - محصولات ویژه
- `GET /api/products/new/` - محصولات جدید
- `GET /api/products/bestsellers/` - پرفروش‌ترین‌ها

### دسته‌بندی‌ها
- `GET /api/categories/` - لیست دسته‌بندی‌ها
- `GET /api/categories/{slug}/` - جزئیات دسته‌بندی

### برندها
- `GET /api/brands/` - لیست برندها
- `GET /api/brands/{slug}/` - جزئیات برند

### سبد خرید
- `GET /api/cart/` - مشاهده سبد خرید
- `POST /api/cart/add/` - افزودن به سبد خرید
- `DELETE /api/cart/remove/{id}/` - حذف از سبد خرید
- `PUT /api/cart/update/{id}/` - بروزرسانی تعداد

### نظرات
- `GET /api/products/{slug}/reviews/` - نظرات محصول
- `POST /api/products/{slug}/add-review/` - افزودن نظر

## محیط‌های توسعه

### متغیرهای محیطی فرانت‌اند
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### متغیرهای محیطی بک‌اند
```env
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

## اسکریپت‌های مفید

### Windows
- `start-backend.bat` - اجرای سرور Django
- `import-data.bat` - وارد کردن داده‌های تست

### Linux/Mac
```bash
# اجرای سرور Django
cd backend && python manage.py runserver 8000

# وارد کردن داده‌های تست
cd backend && python manage.py shell < import_test_data.py
```

## ویژگی‌های اضافی

### SEO
- متا تگ‌های بهینه
- ساختار URL مناسب
- Schema markup

### عملکرد
- تصاویر بهینه‌سازی شده
- Lazy loading
- Caching مناسب

### امنیت
- CORS تنظیم شده
- احراز هویت مناسب
- اعتبارسنجی داده‌ها

## مشارکت

برای مشارکت در پروژه:

1. Fork کنید
2. Branch جدید ایجاد کنید
3. تغییرات را commit کنید
4. Pull Request ارسال کنید

## لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

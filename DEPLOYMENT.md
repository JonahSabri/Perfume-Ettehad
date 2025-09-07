# راهنمای استقرار پروژه اتحاد عطر

## تنظیمات دامنه API

دامنه API برای انتقال اطلاعات از فرانت‌اند به بک‌اند به صورت زیر تنظیم شده است:

- **دامنه API**: `etehadperfume.com`
- **URL کامل API**: `https://etehadperfume.com/api`

## فایل‌های تنظیم شده

### 1. فرانت‌اند (Next.js)
- `lib/config.ts`: تنظیم URL پایه API
- `env.local.example`: فایل نمونه متغیرهای محیطی

### 2. بک‌اند (Django)
- `backend/ettehad_store/settings.py`: تنظیمات CORS و ALLOWED_HOSTS
- `backend/env.example`: فایل نمونه متغیرهای محیطی
- `env.production.example`: فایل نمونه تنظیمات تولید

## مراحل استقرار

### 1. تنظیم DNS
```
etehadperfume.com → IP سرور (هم فرانت‌اند و هم بک‌اند)
www.etehadperfume.com → IP سرور (هم فرانت‌اند و هم بک‌اند)
```

### 2. تنظیم SSL Certificate
- گواهی SSL برای `etehadperfume.com`
- گواهی SSL برای `www.etehadperfume.com`

### 3. تنظیم متغیرهای محیطی

#### فرانت‌اند (.env.local)
```bash
NEXT_PUBLIC_API_URL=https://etehadperfume.com/api
NEXT_PUBLIC_SITE_NAME=اتحاد - فروشگاه آنلاین عطر
NEXT_PUBLIC_SITE_DESCRIPTION=خرید آنلاین عطر و ادکلن اصل از فروشگاه اتحاد
NODE_ENV=production
```

#### بک‌اند (.env)
```bash
SECRET_KEY=your-production-secret-key
DEBUG=False
ALLOWED_HOSTS=etehadperfume.com,www.etehadperfume.com
DATABASE_URL=postgresql://username:password@localhost:5432/ettehad_store
CORS_ALLOWED_ORIGINS=https://etehadperfume.com,https://www.etehadperfume.com
```

### 4. تنظیمات امنیتی
- SSL Redirect فعال
- HSTS فعال
- CORS محدود به دامنه‌های مجاز
- XSS Protection فعال

## تست اتصال

### تست API
```bash
curl -X GET https://etehadperfume.com/api/products/
```

### تست CORS
```javascript
fetch('https://etehadperfume.com/api/products/')
  .then(response => response.json())
  .then(data => console.log(data));
```

## نکات مهم

1. **امنیت**: در محیط تولید حتماً `DEBUG=False` تنظیم کنید
2. **SSL**: تمام ارتباطات باید از طریق HTTPS انجام شود
3. **CORS**: فقط دامنه‌های مجاز می‌توانند به API دسترسی داشته باشند
4. **Database**: در تولید از PostgreSQL استفاده کنید
5. **Redis**: برای کش و Celery از Redis استفاده کنید

## پشتیبانی

در صورت بروز مشکل در اتصال API، موارد زیر را بررسی کنید:
- تنظیمات DNS
- گواهی SSL
- تنظیمات CORS
- متغیرهای محیطی
- فایروال سرور

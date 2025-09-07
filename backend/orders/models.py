from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator
from users.models import CustomUser
from products.models import Product

class Order(models.Model):
    """Order model for customer orders"""
    
    STATUS_CHOICES = [
        ('pending', _('در انتظار پرداخت')),
        ('paid', _('پرداخت شده')),
        ('processing', _('در حال پردازش')),
        ('shipped', _('ارسال شده')),
        ('delivered', _('تحویل داده شده')),
        ('cancelled', _('لغو شده')),
        ('refunded', _('بازپرداخت شده')),
    ]
    
    PAYMENT_METHOD_CHOICES = [
        ('online', _('پرداخت آنلاین')),
        ('cash', _('پرداخت نقدی')),
        ('bank_transfer', _('انتقال بانکی')),
    ]
    
    # Order Information
    order_number = models.CharField(max_length=20, unique=True, verbose_name=_('شماره سفارش'))
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders', verbose_name=_('کاربر'))
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', verbose_name=_('وضعیت'))
    
    # Payment
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES, verbose_name=_('روش پرداخت'))
    payment_status = models.BooleanField(default=False, verbose_name=_('وضعیت پرداخت'))
    payment_date = models.DateTimeField(null=True, blank=True, verbose_name=_('تاریخ پرداخت'))
    transaction_id = models.CharField(max_length=100, blank=True, verbose_name=_('شناسه تراکنش'))
    
    # Pricing
    subtotal = models.DecimalField(max_digits=10, decimal_places=0, verbose_name=_('جمع فرعی'))
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=0, default=0, verbose_name=_('هزینه ارسال'))
    discount_amount = models.DecimalField(max_digits=10, decimal_places=0, default=0, verbose_name=_('مبلغ تخفیف'))
    total_amount = models.DecimalField(max_digits=10, decimal_places=0, verbose_name=_('مبلغ کل'))
    
    # Shipping
    shipping_address = models.TextField(verbose_name=_('آدرس ارسال'))
    shipping_city = models.CharField(max_length=100, verbose_name=_('شهر ارسال'))
    shipping_postal_code = models.CharField(max_length=10, verbose_name=_('کد پستی ارسال'))
    shipping_phone = models.CharField(max_length=15, verbose_name=_('تلفن ارسال'))
    tracking_number = models.CharField(max_length=50, blank=True, verbose_name=_('شماره پیگیری'))
    
    # Notes
    notes = models.TextField(blank=True, verbose_name=_('یادداشت‌ها'))
    admin_notes = models.TextField(blank=True, verbose_name=_('یادداشت‌های ادمین'))
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('سفارش')
        verbose_name_plural = _('سفارشات')
        ordering = ['-created_at']
    
    def __str__(self):
        return f"سفارش {self.order_number} - {self.user.get_full_name()}"
    
    def save(self, *args, **kwargs):
        if not self.order_number:
            # Generate order number
            import datetime
            now = datetime.datetime.now()
            self.order_number = f"ORD{now.year}{now.month:02d}{now.day:02d}{now.hour:02d}{now.minute:02d}{now.second:02d}"
        
        # Calculate total
        self.total_amount = self.subtotal + self.shipping_cost - self.discount_amount
        
        super().save(*args, **kwargs)
    
    @property
    def items_count(self):
        """Return number of items in order"""
        return self.items.count()
    
    @property
    def is_paid(self):
        """Check if order is paid"""
        return self.payment_status and self.status in ['paid', 'processing', 'shipped', 'delivered']

class OrderItem(models.Model):
    """Order item model"""
    
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', verbose_name=_('سفارش'))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_('محصول'))
    quantity = models.PositiveIntegerField(validators=[MinValueValidator(1)], verbose_name=_('تعداد'))
    unit_price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name=_('قیمت واحد'))
    total_price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name=_('قیمت کل'))
    
    class Meta:
        verbose_name = _('آیتم سفارش')
        verbose_name_plural = _('آیتم‌های سفارش')
    
    def __str__(self):
        return f"{self.product.name} - {self.quantity} عدد"
    
    def save(self, *args, **kwargs):
        self.total_price = self.unit_price * self.quantity
        super().save(*args, **kwargs)

class Cart(models.Model):
    """Shopping cart model"""
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='cart', verbose_name=_('کاربر'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ ایجاد'))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_('تاریخ به‌روزرسانی'))
    
    class Meta:
        verbose_name = _('سبد خرید')
        verbose_name_plural = _('سبدهای خرید')
    
    def __str__(self):
        return f"سبد خرید {self.user.username}"
    
    @property
    def total_items(self):
        """Return total number of items in cart"""
        return sum(item.quantity for item in self.items.all())
    
    @property
    def total_price(self):
        """Return total price of cart"""
        return sum(item.total_price for item in self.items.all())

class CartItem(models.Model):
    """Cart item model"""
    
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items', verbose_name=_('سبد خرید'))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_('محصول'))
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)], verbose_name=_('تعداد'))
    added_at = models.DateTimeField(auto_now_add=True, verbose_name=_('تاریخ اضافه شدن'))
    
    class Meta:
        verbose_name = _('آیتم سبد خرید')
        verbose_name_plural = _('آیتم‌های سبد خرید')
        unique_together = ['cart', 'product']
    
    def __str__(self):
        return f"{self.product.name} - {self.quantity} عدد"
    
    @property
    def total_price(self):
        """Return total price for this item"""
        return self.product.final_price * self.quantity

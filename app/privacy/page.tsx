import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, UserCheck, Database, Settings } from 'lucide-react'

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: 'جمع‌آوری اطلاعات',
      content: [
        'اطلاعات شخصی شما تنها در زمان ثبت‌نام و خرید جمع‌آوری می‌شود.',
        'اطلاعات شامل نام، آدرس، شماره تلفن و ایمیل است.',
        'اطلاعات پرداخت به صورت رمزگذاری شده نگهداری می‌شود.',
        'هیچ‌گونه اطلاعات حساس بانکی در سرورهای ما ذخیره نمی‌شود.'
      ]
    },
    {
      icon: Shield,
      title: 'استفاده از اطلاعات',
      content: [
        'اطلاعات شما تنها برای پردازش سفارشات استفاده می‌شود.',
        'ارسال اطلاعات محصولات جدید و تخفیف‌ها (در صورت رضایت شما).',
        'بهبود کیفیت خدمات و تجربه کاربری.',
        'پاسخگویی به سوالات و درخواست‌های پشتیبانی.'
      ]
    },
    {
      icon: Lock,
      title: 'امنیت اطلاعات',
      content: [
        'تمامی اطلاعات با استفاده از پروتکل SSL رمزگذاری می‌شود.',
        'دسترسی به اطلاعات تنها توسط پرسنل مجاز انجام می‌شود.',
        'پشتیبان‌گیری منظم از اطلاعات انجام می‌شود.',
        'سیستم‌های امنیتی به‌روزرسانی مداوم دارند.'
      ]
    },
    {
      icon: UserCheck,
      title: 'حقوق کاربران',
      content: [
        'حق دسترسی به اطلاعات شخصی خود را دارید.',
        'می‌توانید درخواست تصحیح اطلاعات نادرست دهید.',
        'امکان حذف حساب کاربری و اطلاعات مرتبط وجود دارد.',
        'حق لغو اشتراک از دریافت ایمیل‌های تبلیغاتی را دارید.'
      ]
    },
    {
      icon: Eye,
      title: 'اشتراک‌گذاری اطلاعات',
      content: [
        'اطلاعات شما هرگز به اشخاص ثالث فروخته نمی‌شود.',
        'تنها در موارد قانونی اطلاعات به مراجع ذی‌صلاح ارائه می‌شود.',
        'شرکای تجاری تنها اطلاعات ضروری برای ارسال دریافت می‌کنند.',
        'تمامی شرکا متعهد به رعایت حریم خصوصی هستند.'
      ]
    },
    {
      icon: Settings,
      title: 'کوکی‌ها و ردیابی',
      content: [
        'از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کنیم.',
        'می‌توانید تنظیمات کوکی‌ها را در مرورگر خود تغییر دهید.',
        'برخی کوکی‌ها برای عملکرد صحیح سایت ضروری هستند.',
        'اطلاعات ردیابی برای تحلیل ترافیک سایت استفاده می‌شود.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">حریم خصوصی</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ما متعهد به حفاظت از حریم خصوصی و اطلاعات شخصی شما هستیم
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-classic hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                  <section.icon className="w-6 h-6 text-black" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 ml-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 shadow-classic classic-gradient-light">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              سوالی در مورد حریم خصوصی دارید؟
            </h3>
            <p className="text-gray-600 mb-6">
              برای هرگونه سوال در مورد نحوه استفاده از اطلاعات شخصی‌تان با ما تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-classic inline-block px-6 py-3 rounded-lg">
                تماس با ما
              </a>
              <a href="mailto:privacy@ettehad.com" className="btn-outline-classic inline-block px-6 py-3 rounded-lg">
                ایمیل مستقیم
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-8 text-gray-500">
          <p>آخرین به‌روزرسانی: ۱۵ آذر ۱۴۰۳</p>
        </div>
      </div>
    </div>
  )
}

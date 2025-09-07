import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsPage() {
  const sections = [
    {
      title: 'شرایط عمومی',
      content: [
        'استفاده از این وب‌سایت به منزله پذیرش کلیه شرایط و قوانین آن است.',
        'فروشگاه اتحاد حق تغییر این شرایط را در هر زمان محفوظ می‌دارد.',
        'کاربران موظف به رعایت قوانین جمهوری اسلامی ایران هستند.'
      ]
    },
    {
      title: 'ثبت سفارش و پرداخت',
      content: [
        'تمامی قیمت‌ها به تومان و شامل مالیات بر ارزش افزوده است.',
        'پس از ثبت سفارش، امکان تغییر یا لغو آن تا قبل از ارسال وجود دارد.',
        'پرداخت از طریق درگاه‌های معتبر بانکی انجام می‌شود.',
        'در صورت عدم موجودی کالا، مبلغ پرداختی بازگردانده می‌شود.'
      ]
    },
    {
      title: 'ارسال و تحویل',
      content: [
        'زمان ارسال کالا بین ۱ تا ۷ روز کاری است.',
        'هزینه ارسال برای سفارش‌های بالای ۵۰۰ هزار تومان رایگان است.',
        'مسئولیت نگهداری کالا پس از تحویل بر عهده خریدار است.',
        'در صورت عدم حضور خریدار، کالا به انبار بازگردانده می‌شود.'
      ]
    },
    {
      title: 'ضمانت و بازگشت کالا',
      content: [
        'تمامی محصولات دارای ضمانت اصالت هستند.',
        'امکان بازگشت کالا تا ۷ روز پس از خرید وجود دارد.',
        'کالای بازگشتی باید در بسته‌بندی اصلی و بدون استفاده باشد.',
        'هزینه بازگشت کالا در صورت عیب از طرف فروشگاه پرداخت می‌شود.'
      ]
    },
    {
      title: 'حریم خصوصی',
      content: [
        'اطلاعات شخصی کاربران محرمانه نگهداری می‌شود.',
        'فروشگاه متعهد به عدم فروش اطلاعات کاربران به اشخاص ثالث است.',
        'استفاده از اطلاعات تنها برای بهبود خدمات انجام می‌شود.',
        'کاربران حق درخواست حذف اطلاعات خود را دارند.'
      ]
    },
    {
      title: 'مسئولیت‌ها',
      content: [
        'فروشگاه مسئول خسارات ناشی از سوء استفاده کاربران نیست.',
        'کاربران مسئول صحت اطلاعات ارائه شده هستند.',
        'استفاده از محتوای سایت برای اهداف تجاری ممنوع است.',
        'نقل قول از محتوای سایت با ذکر منبع مجاز است.'
      ]
    }
  ]

  return (
    <div className="min-h-screen classic-gradient-light">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">شرایط و قوانین</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            لطفاً قبل از خرید، شرایط و قوانین فروشگاه را مطالعه کنید
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-classic hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
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

        {/* Contact Info */}
        <Card className="mt-12 shadow-classic">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              سوال یا ابهامی دارید؟
            </h3>
            <p className="text-gray-600 mb-6">
              تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-classic inline-block px-6 py-3 rounded-lg">
                تماس با ما
              </a>
              <a href="mailto:info@ettehad.com" className="btn-outline-classic inline-block px-6 py-3 rounded-lg">
                ارسال ایمیل
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

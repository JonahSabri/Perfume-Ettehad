import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ProductSections() {
  const sections = [
    {
      id: 1,
      title: 'عطرهای زنانه لوکس',
      subtitle: 'تا ۳۰% تخفیف',
      image: '/placeholder.svg?height=300&width=400',
      buttonText: 'مشاهده محصولات',
      className: 'card-gradient'
    },
    {
      id: 2,
      title: 'جدیدترین عطرهای مردانه',
      subtitle: 'کلکسیون ۲۰۲۴',
      image: '/placeholder.svg?height=300&width=400',
      buttonText: 'کشف کنید',
      className: 'card-gradient',
      badge: '۲۵%'
    },
    {
      id: 3,
      title: 'ست‌های هدیه ویژه',
      subtitle: 'تا ۴۰% تخفیف',
      image: '/placeholder.svg?height=300&width=400',
      buttonText: 'خرید هدیه',
      className: 'card-gradient'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">پیشنهادات ویژه</h2>
          <p className="text-gray-600 text-lg">بهترین تخفیف‌ها و جدیدترین محصولات</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`product-card ${section.className} p-6 relative hover-lift animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {section.badge && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 text-sm font-medium rounded-full animate-pulse-glow">
                  {section.badge}
                </div>
              )}
              
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.subtitle}
                </p>
                
                <div className="relative h-48 w-full">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className="object-contain hover-scale"
                  />
                </div>
                
                <Button className="btn-classic hover-lift">
                  {section.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

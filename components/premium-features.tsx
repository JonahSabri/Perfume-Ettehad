import { Award, Truck, Shield, Heart } from 'lucide-react'

export default function PremiumFeatures() {
  const features = [
    {
      icon: Award,
      title: 'کیفیت برتر',
      description: 'استفاده از مرغوب‌ترین مواد اولیه جهان'
    },
    {
      icon: Truck,
      title: 'ارسال لوکس',
      description: 'بسته‌بندی ویژه و ارسال سریع'
    },
    {
      icon: Shield,
      title: 'ضمانت اصالت',
      description: '100% ضمانت اصالت و کیفیت'
    },
    {
      icon: Heart,
      title: 'تجربه منحصر',
      description: 'خدمات مشاوره تخصصی'
    }
  ]

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-6">
            تعهد ما به کیفیت
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto border border-black flex items-center justify-center">
                <feature.icon className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-light tracking-wide">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

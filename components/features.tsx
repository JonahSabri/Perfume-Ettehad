import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Truck, Shield, Award, Users, Globe, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Award,
      title: 'کیفیت برتر',
      description: 'استفاده از مرغوب‌ترین مواد اولیه و رعایت استانداردهای بین‌المللی'
    },
    {
      icon: Truck,
      title: 'ارسال سریع',
      description: 'ارسال رایگان برای سفارشات عمده در سراسر کشور'
    },
    {
      icon: Shield,
      title: 'ضمانت اصالت',
      description: '100% ضمانت اصالت محصولات و امکان بازگشت'
    },
    {
      icon: Users,
      title: 'مشاوره تخصصی',
      description: 'تیم متخصص برای راهنمایی و انتخاب بهترین محصولات'
    },
    {
      icon: Globe,
      title: 'پوشش سراسری',
      description: 'خدمات در بیش از 50 شهر ایران'
    },
    {
      icon: Heart,
      title: 'رضایت مشتری',
      description: 'بیش از 10 هزار مشتری راضی و وفادار'
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">ویژگی‌های ما</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            چرا عطر پرشین؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ما با ترکیب سنت کهن عطرسازی ایرانی و تکنولوژی مدرن، 
            بهترین تجربه عطر را برای شما فراهم می‌کنیم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

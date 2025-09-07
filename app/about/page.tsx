import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Globe, Heart, Target, Eye, Shield, Truck } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'مشتریان راضی', value: '50,000+' },
    { icon: Globe, label: 'شهرهای تحت پوشش', value: '100+' },
    { icon: Award, label: 'سال تجربه', value: '10+' },
    { icon: Heart, label: 'محصولات منحصر به فرد', value: '500+' }
  ]

  const values = [
    {
      icon: Award,
      title: 'کیفیت برتر',
      description: 'ارائه محصولات ۱۰۰٪ اصل و باکیفیت از معتبرترین برندهای جهان'
    },
    {
      icon: Heart,
      title: 'رضایت مشتری',
      description: 'تمرکز بر رضایت کامل مشتریان و ارائه بهترین خدمات پس از فروش'
    },
    {
      icon: Target,
      title: 'تخصص',
      description: 'تیم متخصص با سال‌ها تجربه در صنعت عطر و ادکلن'
    },
    {
      icon: Globe,
      title: 'دسترسی آسان',
      description: 'ارسال سریع و آسان به سراسر کشور با بهترین قیمت‌ها'
    }
  ]

  const team = [
    {
      name: 'علی احمدی',
      role: 'مدیر عامل و بنیانگذار',
      image: '/placeholder.svg?height=300&width=300',
      description: 'با بیش از ۱۵ سال تجربه در صنعت عطر'
    },
    {
      name: 'فاطمه رضایی',
      role: 'مدیر فروش و بازاریابی',
      image: '/placeholder.svg?height=300&width=300',
      description: 'کارشناس بازاریابی دیجیتال'
    },
    {
      name: 'محمد کریمی',
      role: 'مدیر خدمات مشتریان',
      image: '/placeholder.svg?height=300&width=300',
      description: 'متخصص خدمات مشتریان و پشتیبانی'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 bg-gray-100 text-gray-800">درباره اتحاد</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-classic">
            داستان ما، عطر شما
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            از سال ۱۳۹۳ با هدف ارائه بهترین عطرهای اصل جهان، مسیر خود را آغاز کردیم. 
            امروز به عنوان یکی از معتبرترین فروشگاه‌های آنلاین عطر در کشور شناخته می‌شویم.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover-lift shadow-classic animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-0">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <div className="text-3xl font-bold mb-2 text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-right">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">داستان آغاز</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                فروشگاه اتحاد در سال ۱۳۹۳ با هدف ارائه عطرهای اصل و باکیفیت به مردم ایران تأسیس شد. 
                بنیانگذاران ما با سفر به مراکز عطرسازی معتبر جهان، شبکه‌ای از تأمین‌کنندگان مطمئن ایجاد کردند.
              </p>
              <p>
                امروز با بیش از ۱۰ سال تجربه، ما نه تنها در بازار آنلاین بلکه در فروشگاه‌های فیزیکی نیز 
                حضور فعال داریم. محصولات ما با ضمانت اصالت و بهترین قیمت‌ها ارائه می‌شوند.
              </p>
              <p>
                هدف ما ارائه تجربه‌ای منحصر به فرد از خرید عطر است که نه تنها محصول باکیفیت، 
                بلکه خدمات عالی پس از فروش را نیز شامل می‌شود.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-left">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="فروشگاه اتحاد"
              width={600}
              height={500}
              className="rounded-lg shadow-classic hover-scale"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 shadow-classic hover-lift">
            <CardContent className="p-0">
              <Target className="w-12 h-12 mb-4 text-black" />
              <h3 className="text-2xl font-bold mb-4">ماموریت ما</h3>
              <p className="text-gray-600 leading-relaxed">
                ارائه عطرهای اصل و باکیفیت با بهترین قیمت‌ها و خدمات عالی به مشتریان در سراسر کشور. 
                ما متعهد هستیم که بهترین تجربه خرید را برای شما فراهم کنیم.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 shadow-classic hover-lift">
            <CardContent className="p-0">
              <Eye className="w-12 h-12 mb-4 text-black" />
              <h3 className="text-2xl font-bold mb-4">چشم‌انداز ما</h3>
              <p className="text-gray-600 leading-relaxed">
                تبدیل شدن به بزرگ‌ترین و معتبرترین فروشگاه آنلاین عطر در ایران و منطقه. 
                ما می‌خواهیم استانداردی جدید در صنعت فروش عطر ایجاد کنیم.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">ارزش‌های ما</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اصولی که ما را در مسیر خدمت‌رسانی به شما راهنمایی می‌کند
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">تیم ما</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تیمی از متخصصان با تجربه که با عشق و دقت، بهترین خدمات را برای شما فراهم می‌کنند
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden shadow-classic hover-lift animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover hover-scale"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                    <p className="text-sm leading-relaxed text-gray-500">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <Card className="p-8 classic-gradient-light shadow-classic">
          <CardContent className="p-0">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">چرا اتحاد؟</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">ضمانت اصالت</h3>
                <p className="text-gray-600">
                  ۱۰۰٪ ضمانت اصالت تمامی محصولات
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">ارسال سریع</h3>
                <p className="text-gray-600">
                  ارسال رایگان بالای ۵۰۰ هزار تومان
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">خدمات عالی</h3>
                <p className="text-gray-600">
                  پشتیبانی ۲۴ ساعته و خدمات پس از فروش
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="عطرهای لوکس پرشین"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
          عطرهای اصیل ایرانی
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          عطر، هویت شما
          <br />
          <span className="text-white/80">کیفیت، انتخاب ما</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          بیش از ۱۵ سال تجربه در تولید و توزیع عطرهای لوکس ایرانی و بین‌المللی
          <br />
          برای فروش عمده و خرده فروشی
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/shop">
              مشاهده محصولات
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Play className="w-4 h-4 ml-2" />
            تماشای ویدیو معرفی
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
            <div className="text-white/80">محصول منحصر به فرد</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
            <div className="text-white/80">مشتری راضی</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
            <div className="text-white/80">شهر تحت پوشش</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div className="text-white/80">سال تجربه</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

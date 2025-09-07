import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Instagram, Send, Phone, Mail, MapPin } from 'lucide-react'

export default function DiptyqueFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Enhanced Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-wider text-gradient animate-pulse-glow">اتحاد</div>
            <p className="text-gray-300 leading-relaxed">
              عطرهای لوکس اروپایی با بیش از ۲۵ سال تجربه در هنر عطرسازی
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="text-white hover:text-purple-400 hover:bg-white/10 rounded-full hover-scale">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-400 hover:bg-white/10 rounded-full hover-scale">
                <Send className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Enhanced Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">خدمات مشتریان</h3>
            <div className="space-y-3">
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                تماس با ما
              </Link>
              <Link href="/shipping" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                ارسال و تحویل
              </Link>
              <Link href="/returns" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                بازگشت کالا
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                سوالات متداول
              </Link>
            </div>
          </div>

          {/* Enhanced About */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">درباره اتحاد</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                داستان ما
              </Link>
              <Link href="/why-ettehad" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                چرا اتحاد؟
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                وبلاگ
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-white transition-colors hover-scale">
                فرصت‌های شغلی
              </Link>
            </div>
          </div>

          {/* Enhanced Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">خبرنامه اتحاد</h3>
            <p className="text-gray-300 text-sm">
              از جدیدترین عطرهای لوکس و پیشنهادات ویژه باخبر شوید
            </p>
            <div className="space-y-4">
              <Input 
                placeholder="ایمیل شما" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 focus:bg-white/20 transition-all duration-300"
              />
              <Button className="w-full btn-luxury hover-lift">
                عضویت در خبرنامه
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © ۱۴۰۳ اتحاد. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-8 space-x-reverse text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors hover-scale">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors hover-scale">
                شرایط استفاده
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors hover-scale">
                کوکی‌ها
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

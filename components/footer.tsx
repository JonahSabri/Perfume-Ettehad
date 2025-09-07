import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Instagram, Send, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">پ</span>
              </div>
              <span className="font-bold text-xl">عطر پرشین</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              تولیدکننده و توزیع‌کننده عطرهای لوکس ایرانی و بین‌المللی با بیش از ۱۵ سال تجربه
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">لینک‌های سریع</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">
                خانه
              </Link>
              <Link href="/shop" className="block text-white/80 hover:text-white transition-colors">
                فروشگاه
              </Link>
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors">
                درباره ما
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors">
                تماس با ما
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">دسته‌بندی‌ها</h3>
            <div className="space-y-2">
              <Link href="/shop?category=men" className="block text-white/80 hover:text-white transition-colors">
                عطرهای مردانه
              </Link>
              <Link href="/shop?category=women" className="block text-white/80 hover:text-white transition-colors">
                عطرهای زنانه
              </Link>
              <Link href="/shop?category=unisex" className="block text-white/80 hover:text-white transition-colors">
                عطرهای یونیسکس
              </Link>
              <Link href="/shop?featured=true" className="block text-white/80 hover:text-white transition-colors">
                پیشنهادات ویژه
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 space-x-reverse text-white/80">
                <Phone className="h-4 w-4" />
                <span>۰۲۱-۸۸۷۷۶۶۵۵</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-white/80">
                <Mail className="h-4 w-4" />
                <span>info@persianperfume.ir</span>
              </div>
              <div className="flex items-start space-x-2 space-x-reverse text-white/80">
                <MapPin className="h-4 w-4 mt-1" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳۴</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">خبرنامه</h4>
              <div className="flex space-x-2 space-x-reverse">
                <Input 
                  placeholder="ایمیل شما" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary">عضویت</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © ۱۴۰۳ عطر پرشین. تمامی حقوق محفوظ است.
          </p>
          <div className="flex space-x-6 space-x-reverse text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              شرایط استفاده
            </Link>
            <Link href="/return-policy" className="text-white/60 hover:text-white transition-colors">
              سیاست بازگشت
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

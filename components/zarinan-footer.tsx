import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Instagram, Send, Phone, Mail, MapPin, CreditCard, Shield, Truck } from 'lucide-react'

export default function ZarinanFooter() {
  return (
    <footer className="classic-gradient text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              اتحاد
            </div>
            <p className="text-gray-300 leading-relaxed">
              فروشگاه آنلاین عطر و ادکلن با بیش از ۱۰ سال تجربه در ارائه بهترین محصولات اصل جهان
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">دسترسی سریع</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                درباره ما
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                تماس با ما
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                سوالات متداول
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                شرایط و قوانین
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                حریم خصوصی
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">دسته‌بندی‌ها</h3>
            <div className="space-y-2">
              <Link href="/category/men" className="block text-gray-300 hover:text-white transition-colors">
                عطر مردانه
              </Link>
              <Link href="/category/women" className="block text-gray-300 hover:text-white transition-colors">
                عطر زنانه
              </Link>
              <Link href="/category/unisex" className="block text-gray-300 hover:text-white transition-colors">
                عطر یونیسکس
              </Link>
              <Link href="/category/cologne" className="block text-gray-300 hover:text-white transition-colors">
                ادکلن
              </Link>
              <Link href="/category/gift-sets" className="block text-gray-300 hover:text-white transition-colors">
                ست هدیه
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Phone className="h-4 w-4" />
                <span>۰۲۱-۸۸۷۷۶۶۵۵</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@ettehad.com</span>
              </div>
              <div className="flex items-start space-x-2 space-x-reverse text-gray-300">
                <MapPin className="h-4 w-4 mt-1" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">خبرنامه</h4>
              <div className="flex space-x-2 space-x-reverse">
                <Input 
                  placeholder="ایمیل شما" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-white text-black hover:bg-gray-200">
                  عضویت
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 space-x-reverse">
              <Truck className="h-6 w-6 text-white" />
              <span>ارسال رایگان بالای ۵۰۰ هزار تومان</span>
            </div>
            <div className="flex items-center justify-center space-x-3 space-x-reverse">
              <Shield className="h-6 w-6 text-white" />
              <span>۱۰۰٪ ضمانت اصالت</span>
            </div>
            <div className="flex items-center justify-center space-x-3 space-x-reverse">
              <CreditCard className="h-6 w-6 text-white" />
              <span>پرداخت امن و آسان</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © ۱۴۰۳ فروشگاه اتحاد. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}

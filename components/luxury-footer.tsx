import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Instagram, Send } from 'lucide-react'

export default function LuxuryFooter() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-light tracking-[0.3em]">
              پرشین
            </Link>
            <p className="text-gray-600 leading-relaxed tracking-wide max-w-xs">
              عطرهای لوکس ایرانی با بیش از ۱۵ سال تجربه در هنر عطرسازی
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wide">صفحات</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                خانه
              </Link>
              <Link href="/shop" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                مجموعه‌ها
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                درباره
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                تماس
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wide">دسته‌بندی</h3>
            <div className="space-y-3">
              <Link href="/shop?category=women" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                زنانه
              </Link>
              <Link href="/shop?category=men" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                مردانه
              </Link>
              <Link href="/shop?category=unisex" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                یونیسکس
              </Link>
              <Link href="/shop?featured=true" className="block text-gray-600 hover:text-black transition-colors tracking-wide">
                جدید
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wide">خبرنامه</h3>
            <p className="text-gray-600 text-sm tracking-wide">
              از جدیدترین مجموعه‌ها و پیشنهادات ویژه باخبر شوید
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="ایمیل شما" 
                className="border-gray-200 focus:border-black"
              />
              <Button className="w-full bg-black text-white hover:bg-gray-800 tracking-wide">
                عضویت
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm tracking-wide">
              © ۱۴۰۳ پرشین. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-8 space-x-reverse text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors tracking-wide">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-black transition-colors tracking-wide">
                شرایط
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function LuxuryAbout() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.3em] text-gray-600 uppercase">
                درباره پرشین
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
                ۱۵ سال هنر
                <br />
                عطرسازی
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed tracking-wide">
                <p>
                  از سال ۱۳۸۸، ما با عشق و دقت بالا، عطرهایی خلق کرده‌ایم که 
                  ترکیبی منحصر به فرد از سنت کهن ایرانی و تکنیک‌های مدرن عطرسازی هستند.
                </p>
                <p>
                  هر بطری عطر ما نتیجه ساعت‌ها تحقیق، آزمایش و تکمیل است. 
                  ما معتقدیم که عطر نه تنها بویی خوشایند، بلکه بیان شخصیت و احساسات شماست.
                </p>
              </div>
            </div>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Link href="/about">
                داستان ما
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="کارگاه عطرسازی"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-light mb-2">10,000+</div>
                <div className="text-sm tracking-[0.2em] text-gray-600">مشتری راضی</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

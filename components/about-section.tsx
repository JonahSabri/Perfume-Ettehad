import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">درباره ما</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ۱۵ سال تجربه در دنیای عطر
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                شرکت عطر پرشین از سال ۱۳۸۸ با هدف احیای عطرهای سنتی ایرانی و ترکیب آن‌ها با 
                تکنیک‌های مدرن عطرسازی فعالیت خود را آغاز کرد.
              </p>
              <p>
                امروز با بیش از ۱۵ سال تجربه، ما نه تنها در بازار داخلی بلکه در بازارهای منطقه‌ای نیز 
                حضور فعال داریم. محصولات ما با استفاده از مرغوب‌ترین مواد اولیه تولید می‌شود.
              </p>
              <p>
                هدف ما ارائه عطرهایی است که نه تنها عطر، بلکه حس و حال خاصی را منتقل کند. 
                هر بطری عطر ما داستانی از فرهنگ غنی ایرانی را روایت می‌کند.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  بیشتر بدانید
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  تماس با ما
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="کارگاه عطرسازی سنتی"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-center mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground text-center">مشتری راضی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

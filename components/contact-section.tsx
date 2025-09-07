import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">تماس با ما</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            آماده پاسخگویی به شما هستیم
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            برای سفارش عمده، مشاوره یا هرگونه سوال، تیم متخصص ما در خدمت شماست
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">تماس تلفنی</h3>
              <p className="text-muted-foreground mb-4">
                پاسخگویی در تمام روزهای کاری
              </p>
              <p className="font-semibold">۰۲۱-۸۸۷۷۶۶۵۵</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">ایمیل</h3>
              <p className="text-muted-foreground mb-4">
                پاسخ در کمتر از ۲۴ ساعت
              </p>
              <p className="font-semibold">info@persianperfume.ir</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">آدرس</h3>
              <p className="text-muted-foreground mb-4">
                دفتر مرکزی تهران
              </p>
              <p className="font-semibold">خیابان ولیعصر، پلاک ۱۲۳۴</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              تماس با ما
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

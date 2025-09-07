import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ElegantContact() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-6">
            در خدمت شما
          </h2>
          <p className="text-lg tracking-[0.3em] opacity-80 max-w-2xl mx-auto">
            برای مشاوره و سفارش عمده با ما در تماس باشید
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border border-white flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-light tracking-wide">تماس</h3>
              <p className="opacity-80 tracking-wide">۰۲۱-۸۸۷۷۶۶۵۵</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border border-white flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-light tracking-wide">ایمیل</h3>
              <p className="opacity-80 tracking-wide">info@persianperfume.ir</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border border-white flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-light tracking-wide">آدرس</h3>
              <p className="opacity-80 tracking-wide">تهران، خیابان ولیعصر</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-12 py-6 text-lg tracking-[0.2em]"
          >
            <Link href="/contact">
              تماس با ما
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

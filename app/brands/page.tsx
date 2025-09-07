import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function BrandsPage() {
  const brands = [
    {
      id: 1,
      name: 'Chanel',
      logo: '/placeholder.svg?height=100&width=200',
      description: 'برند لوکس فرانسوی با بیش از ۱۰۰ سال تاریخ',
      productCount: 45,
      isPopular: true
    },
    {
      id: 2,
      name: 'Dior',
      logo: '/placeholder.svg?height=100&width=200',
      description: 'یکی از معتبرترین برندهای عطر جهان',
      productCount: 38,
      isPopular: true
    },
    {
      id: 3,
      name: 'Tom Ford',
      logo: '/placeholder.svg?height=100&width=200',
      description: 'برند آمریکایی با عطرهای منحصر به فرد',
      productCount: 32,
      isPopular: false
    },
    {
      id: 4,
      name: 'Armani',
      logo: '/placeholder.svg?height=100&width=200',
      description: 'برند ایتالیایی با طراحی‌های کلاسیک',
      productCount: 28,
      isPopular: true
    },
    {
      id: 5,
      name: 'Versace',
      logo: '/placeholder.svg?height=100&width=200',
      description: 'برند لوکس ایتالیایی',
      productCount: 24,
      isPopular: false
    },
    {
      id: 6,
      name: 'Gucci',
      logo: '/placeholder.svg?height=100&width=200',
      description: 'برند مد و عطر ایتالیایی',
      productCount: 22,
      isPopular: true
    }
  ]

  return (
    <div className="min-h-screen classic-gradient-light">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">برندهای معتبر</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از معتبرترین برندهای عطر جهان
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="product-card p-6 text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {brand.isPopular && (
                <div className="mb-4">
                  <Badge className="bg-black text-white">محبوب</Badge>
                </div>
              )}
              
              <div className="relative h-24 w-full mb-6">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  fill
                  className="object-contain hover-scale"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {brand.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {brand.description}
              </p>
              
              <div className="text-sm text-gray-500">
                {brand.productCount} محصول موجود
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

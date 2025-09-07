import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Star } from 'lucide-react'

export default function ProductShowcase() {
  const featuredProducts = [
    {
      id: 1,
      name: 'عطر رز پرشین',
      category: 'زنانه',
      price: 2500000,
      originalPrice: 3000000,
      rating: 4.8,
      image: '/luxury-persian-rose-perfume.png'
    },
    {
      id: 2,
      name: 'عود سلطنتی',
      category: 'مردانه',
      price: 3200000,
      originalPrice: 3800000,
      rating: 4.9,
      image: '/placeholder-09heq.png'
    },
    {
      id: 3,
      name: 'یاس اصفهان',
      category: 'زنانه',
      price: 1800000,
      originalPrice: 2200000,
      rating: 4.7,
      image: '/elegant-jasmine-perfume.png'
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">محصولات ویژه</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            پرفروش‌ترین عطرهای ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعه‌ای از محبوب‌ترین و پرفروش‌ترین عطرهای ما که مورد پسند هزاران مشتری قرار گرفته‌اند
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% تخفیف
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground mr-2">({product.rating})</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{product.price.toLocaleString('fa-IR')} تومان</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice.toLocaleString('fa-IR')}
                      </span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/product/${product.id}`}>
                      مشاهده جزئیات
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/shop">
              مشاهده همه محصولات
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

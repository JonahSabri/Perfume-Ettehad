"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingBag, Eye } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Midnight Elegance',
    category: 'عطر زنانه لوکس',
    price: '2,500,000',
    originalPrice: '3,000,000',
    image: '/luxury-persian-rose-perfume.png',
    isNew: true,
    isFeatured: true,
    description: 'ترکیبی از وانیل، عنبر و گل یاس'
  },
  {
    id: 2,
    name: 'Royal Oud',
    category: 'عطر مردانه کلاسیک',
    price: '3,200,000',
    originalPrice: '3,800,000',
    image: '/placeholder-09heq.png',
    isNew: false,
    isFeatured: true,
    description: 'عود خالص با نت‌های چرم و چوب صندل'
  },
  {
    id: 3,
    name: 'Garden of Dreams',
    category: 'عطر زنانه بهاری',
    price: '1,800,000',
    originalPrice: '2,200,000',
    image: '/elegant-jasmine-perfume.png',
    isNew: true,
    isFeatured: false,
    description: 'مجموعه‌ای از گل‌های بهاری'
  },
  {
    id: 4,
    name: 'Urban Legend',
    category: 'عطر یونیسکس مدرن',
    price: '2,800,000',
    originalPrice: '3,300,000',
    image: '/placeholder-ojq4u.png',
    isNew: false,
    isFeatured: true,
    description: 'ترکیب مدرن از نت‌های شهری'
  },
  {
    id: 5,
    name: 'Velvet Rose',
    category: 'عطر زنانه رمانتیک',
    price: '2,200,000',
    originalPrice: '2,600,000',
    image: '/rose-water-perfume-persian.png',
    isNew: false,
    isFeatured: false,
    description: 'گل رز مخملی با نت‌های شیرین'
  },
  {
    id: 6,
    name: 'Black Diamond',
    category: 'عطر مردانه قدرتمند',
    price: '3,500,000',
    originalPrice: '4,000,000',
    image: '/placeholder-7h639.png',
    isNew: true,
    isFeatured: true,
    description: 'عطری قدرتمند با نت‌های تیره'
  }
]

export default function EnhancedProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-move-bg opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 px-6 py-3 text-base font-medium rounded-full animate-bounce-in">
            مجموعه‌های ویژه اتحاد
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient animate-slide-in-top">
            عطرهای لوکس اروپایی
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-scale-in">
            هر عطر داستانی از زیبایی و لوکس اروپایی را روایت می‌کند
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-luxury hover:shadow-luxury-xl transition-all duration-700 overflow-hidden hover-lift luxury-hover"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-1000"
                />
                
                {/* Enhanced Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  {product.isNew && (
                    <Badge className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 text-sm font-medium rounded-full animate-pulse-glow">
                      جدید
                    </Badge>
                  )}
                  {product.isFeatured && (
                    <Badge variant="secondary" className="bg-white/95 text-black px-4 py-2 text-sm font-medium rounded-full animate-bounce-in">
                      ویژه
                    </Badge>
                  )}
                </div>

                {/* Enhanced Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-6 left-6">
                    <Badge variant="destructive" className="px-4 py-2 text-sm font-medium rounded-full animate-pulse-soft">
                      {Math.round(((parseInt(product.originalPrice.replace(/,/g, '')) - parseInt(product.price.replace(/,/g, ''))) / parseInt(product.originalPrice.replace(/,/g, ''))) * 100)}% تخفیف
                    </Badge>
                  </div>
                )}

                {/* Enhanced Hover Actions */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center gap-4 transition-all duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button
                    size="icon"
                    className="glass text-white hover:bg-white/30 w-14 h-14 rounded-full hover-scale animate-bounce-in"
                    style={{ animationDelay: '0.1s' }}
                  >
                    <Heart className="w-6 h-6" />
                  </Button>
                  <Button
                    size="icon"
                    className="glass text-white hover:bg-white/30 w-14 h-14 rounded-full hover-scale animate-bounce-in"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <Eye className="w-6 h-6" />
                  </Button>
                  <Button
                    size="icon"
                    className="glass text-white hover:bg-white/30 w-14 h-14 rounded-full hover-scale animate-bounce-in"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <ShoppingBag className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Product Info */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">{product.category}</p>
                  <h3 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Enhanced Price */}
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-black">
                        {product.price} تومان
                      </span>
                      {product.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Button */}
                <Link href={`/product/${product.id}`}>
                  <Button className="w-full btn-luxury mt-6 hover-tilt">
                    مشاهده جزئیات
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className="text-center mt-20 animate-fade-in-up">
          <Link href="/shop">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-16 py-6 text-xl font-medium rounded-2xl transition-all duration-500 hover-lift"
            >
              مشاهده همه محصولات اتحاد
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

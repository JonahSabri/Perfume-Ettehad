"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { useFeaturedProducts } from '@/hooks/use-api'
import { LoadingGrid } from '@/components/ui/loading'

export default function FeaturedProducts() {
  const { data: products, loading, error } = useFeaturedProducts()

  if (loading) {
    return (
      <section className="py-16 classic-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">محصولات ویژه</h2>
            <p className="text-gray-600 text-lg">برترین عطرهای انتخاب شده برای شما</p>
          </div>
          <LoadingGrid count={4} />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 classic-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">خطا در بارگذاری محصولات: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-16 classic-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">هیچ محصول ویژه‌ای یافت نشد</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 classic-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">محصولات ویژه</h2>
          <p className="text-gray-600 text-lg">برترین عطرهای انتخاب شده برای شما</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card group animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <Image
                    src={product.images?.[0]?.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {product.is_new && (
                    <Badge className="bg-black text-white">جدید</Badge>
                  )}
                  {product.discount_percentage && product.discount_percentage > 0 && (
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                      {product.discount_percentage}% تخفیف
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-8 w-8 hover-scale">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 hover-scale">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-sm text-gray-500">{product.brand.name}</p>
                  <h3 className="font-semibold text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price} تومان
                  </span>
                  {product.original_price && (
                    <span className="text-sm text-gray-500 line-through mr-2">
                      {product.original_price}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Link href={`/product/${product.slug}`}>
                  <Button className="w-full btn-classic hover-lift">
                    مشاهده جزئیات
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button className="btn-outline-classic px-8 py-3 hover-lift">
              مشاهده همه محصولات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

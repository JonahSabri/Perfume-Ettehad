"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useProduct } from '@/hooks/use-api'
import { Loading } from '@/components/ui/loading'
import { Star, Heart, ShoppingCart } from 'lucide-react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const { toast } = useToast()
  const { data: product, loading, error } = useProduct(params.id)

  const handleAddToCart = () => {
    if (product) {
      toast({
        title: "محصول اضافه شد",
        description: `${product.name} به سبد خرید اضافه شد.`,
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="container mx-auto px-6">
          <Loading text="در حال بارگذاری محصول..." />
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600">خطا در بارگذاری محصول: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="relative aspect-square bg-gray-50 overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage]?.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-gray-50 overflow-hidden rounded-lg transition-opacity ${
                      selectedImage === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-8 lg:pt-16">
            <div className="space-y-4">
              <h1 className="text-4xl">{product.name}</h1>
              <p className="text-xl text-gray-600">{product.brand.name}</p>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-bold">{product.price} تومان</p>
                {product.original_price && (
                  <p className="text-lg text-gray-500 line-through">{product.original_price} تومان</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.rating})</span>
              <span className="text-sm text-gray-500">• {product.review_count} نظر</span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4">
              <Button 
                onClick={handleAddToCart} 
                className="flex-1 bg-black text-white hover:bg-gray-800 h-12 rounded-lg"
              >
                <ShoppingCart className="ml-2 h-5 w-5" />
                افزودن به سبد خرید
              </Button>
              <Button variant="outline" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

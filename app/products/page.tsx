"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, ShoppingCart, Filter, Search } from 'lucide-react'
import { useProducts } from '@/hooks/use-api'
import { LoadingGrid } from '@/components/ui/loading'
import { useToast } from '@/hooks/use-toast'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [sortBy, setSortBy] = useState('')
  const { toast } = useToast()

  const { data: productsData, loading, error } = useProducts({
    search: searchTerm || undefined,
    category: selectedCategory || undefined,
    brand: selectedBrand || undefined,
    ordering: sortBy || undefined,
  })

  const handleAddToCart = (productName: string) => {
    toast({
      title: "محصول اضافه شد",
      description: `${productName} به سبد خرید اضافه شد.`,
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">همه محصولات</h1>
            <p className="text-gray-600">مجموعه کامل عطرها و ادکلن‌های ما</p>
          </div>
          <LoadingGrid count={8} />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-600">خطا در بارگذاری محصولات: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  const products = productsData?.results || []

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">همه محصولات</h1>
          <p className="text-gray-600">مجموعه کامل عطرها و ادکلن‌های ما</p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">همه دسته‌بندی‌ها</option>
              <option value="women">عطر زنانه</option>
              <option value="men">عطر مردانه</option>
              <option value="unisex">عطر یونیسکس</option>
              <option value="cologne">ادکلن</option>
            </select>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">همه برندها</option>
              <option value="chanel">Chanel</option>
              <option value="dior">Dior</option>
              <option value="tom-ford">Tom Ford</option>
              <option value="armani">Armani</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">مرتب‌سازی</option>
              <option value="price">قیمت (کم به زیاد)</option>
              <option value="-price">قیمت (زیاد به کم)</option>
              <option value="-created_at">جدیدترین</option>
              <option value="-rating">بهترین امتیاز</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {productsData?.count || 0} محصول یافت شد
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">هیچ محصولی یافت نشد</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card group animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
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
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-8 w-8 hover-scale"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <p className="text-sm text-gray-500 mb-1">{product.brand.name}</p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price} تومان
                    </span>
                    {product.original_price && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.original_price} تومان
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
        )}

        {/* Pagination */}
        {productsData && (productsData.next || productsData.previous) && (
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              {productsData.previous && (
                <Button variant="outline">قبلی</Button>
              )}
              {productsData.next && (
                <Button variant="outline">بعدی</Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

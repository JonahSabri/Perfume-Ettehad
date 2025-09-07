import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: 'عطر زنانه',
      image: '/placeholder.svg?height=300&width=400',
      description: 'مجموعه‌ای از بهترین عطرهای زنانه جهان',
      productCount: 156,
      discount: '۲۵%'
    },
    {
      id: 2,
      name: 'عطر مردانه',
      image: '/placeholder.svg?height=300&width=400',
      description: 'عطرهای قدرتمند و جذاب برای آقایان',
      productCount: 134,
      discount: '۲۰%'
    },
    {
      id: 3,
      name: 'عطر یونیسکس',
      image: '/placeholder.svg?height=300&width=400',
      description: 'عطرهای مناسب برای همه',
      productCount: 89,
      discount: null
    },
    {
      id: 4,
      name: 'ادکلن',
      image: '/placeholder.svg?height=300&width=400',
      description: 'ادکلن‌های تازه و خنک',
      productCount: 67,
      discount: '۱۵%'
    },
    {
      id: 5,
      name: 'ست هدیه',
      image: '/placeholder.svg?height=300&width=400',
      description: 'بهترین هدایا برای عزیزانتان',
      productCount: 45,
      discount: '۳۰%'
    },
    {
      id: 6,
      name: 'برندهای لوکس',
      image: '/placeholder.svg?height=300&width=400',
      description: 'عطرهای لوکس و گران‌قیمت',
      productCount: 78,
      discount: null
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">دسته‌بندی محصولات</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            انتخاب کنید از میان دسته‌بندی‌های مختلف عطر و ادکلن
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="product-card group overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {category.discount && (
                  <div className="absolute top-4 right-4">
                    <Badge className="discount-badge">
                      تا {category.discount} تخفیف
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="text-sm text-gray-500">
                  {category.productCount} محصول موجود
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

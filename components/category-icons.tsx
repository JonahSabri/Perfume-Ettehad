"use client";

import Link from 'next/link'
import { TrendingUp, Sparkles, Heart, Crown, Gift, Star, Zap, Award } from 'lucide-react'
import { useCategories } from '@/hooks/use-api'
import { Loading } from '@/components/ui/loading'

export default function CategoryIcons() {
  const { data: categories, loading, error } = useCategories()
  
  console.log('CategoryIcons Debug:', { categories, loading, error })

  if (loading) {
    return (
      <section className="py-12 classic-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">دسته‌بندی محصولات</h2>
            <p className="text-gray-600">انتخاب کنید از میان بهترین دسته‌بندی‌های عطر</p>
          </div>
          <Loading text="در حال بارگذاری دسته‌بندی‌ها..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 classic-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">خطا در بارگذاری دسته‌بندی‌ها: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (!categories || categories.length === 0) {
    return (
      <section className="py-12 classic-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">هیچ دسته‌بندی‌ای یافت نشد</p>
          </div>
        </div>
      </section>
    )
  }

  // Icon mapping for categories
  const iconMap = {
    'trending': TrendingUp,
    'women': Sparkles,
    'men': Crown,
    'cologne': Zap,
    'unisex': Heart,
    'gift-sets': Gift,
    'luxury': Star,
    'bestsellers': Award,
  }

  return (
    <section className="py-12 classic-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">دسته‌بندی محصولات</h2>
          <p className="text-gray-600">انتخاب کنید از میان بهترین دسته‌بندی‌های عطر</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {categories && categories.length > 0 ? categories.map((category, index) => {
            const IconComponent = iconMap[category.slug as keyof typeof iconMap] || TrendingUp;
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="flex flex-col items-center group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="category-icon text-purple-600 hover:text-white">
                  <IconComponent className="h-8 w-8" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-gray-900 text-center">
                  {category.name}
                </span>
              </Link>
            );
          }) : (
            <div className="text-center py-8">
              <p className="text-gray-600">هیچ دسته‌بندی‌ای یافت نشد</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'رز پرشین',
    subtitle: 'عطر زنانه',
    price: '2,500,000 تومان',
    image: '/luxury-persian-rose-perfume.png'
  },
  {
    id: 2,
    name: 'عود سلطنتی',
    subtitle: 'عطر مردانه',
    price: '3,200,000 تومان',
    image: '/placeholder-09heq.png'
  },
  {
    id: 3,
    name: 'یاس اصفهان',
    subtitle: 'عطر زنانه',
    price: '1,800,000 تومان',
    image: '/elegant-jasmine-perfume.png'
  },
  {
    id: 4,
    name: 'صندل کاشان',
    subtitle: 'عطر یونیسکس',
    price: '2,800,000 تومان',
    image: '/placeholder-ojq4u.png'
  },
  {
    id: 5,
    name: 'گل محمدی شیراز',
    subtitle: 'عطر زنانه',
    price: '2,200,000 تومان',
    image: '/rose-water-perfume-persian.png'
  },
  {
    id: 6,
    name: 'عنبر سیاه',
    subtitle: 'عطر مردانه',
    price: '3,500,000 تومان',
    image: '/placeholder-7h639.png'
  }
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-4">مجموعه عطرها</h1>
          <p className="text-gray-600">کشف کنید عطرهای منحصر به فرد ما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.subtitle}</p>
                <p className="text-lg">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

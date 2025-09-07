"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'

export default function DiptyqueNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'جدید و ترند', href: '/new' },
    { name: 'عطرها', href: '/shop' },
    { name: 'شمع و خانه', href: '/candles' },
    { name: 'حمام و بدن', href: '/bath' },
    { name: 'دکور خانه', href: '/decor' },
    { name: 'هدایا', href: '/gifts' },
    { name: 'خدمات', href: '/services' },
    { name: 'درباره پرشین', href: '/about' }
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-yellow-200 text-center py-2 px-4 text-sm relative">
        <p>عطرها، شمع‌ها، محصولات مراقبت از بدن و اشیاء تزیینی، هدایای نمادین پرشین را کشف کنید</p>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">×</button>
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          {/* Top Row */}
          <div className="flex h-16 items-center justify-between">
            {/* Search */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative hidden md:block">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="جستجوی عطر..."
                  className="w-64 pr-10 border-0 bg-gray-50 rounded-full"
                />
              </div>
            </div>

            {/* Logo */}
            <Link href="/" className="text-center">
              <div className="text-2xl font-bold tracking-wider">پرشین</div>
              <div className="text-xs tracking-[0.3em] text-gray-600">PARIS</div>
            </Link>

            {/* Actions */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg py-2 hover:text-gray-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 space-x-reverse py-4 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}

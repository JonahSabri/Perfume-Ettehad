"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react'

export default function ZarinanHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'اتحاد', href: '/', active: true },
    { name: 'محصولات', href: '/products' },
    { name: 'برندها', href: '/brands' },
    { name: 'سوالات متداول', href: '/faq' },
    { name: 'تماس با ما', href: '/contact' },
    { name: 'درباره ما', href: '/about' },
    { name: 'دسته بندی محصولات', href: '/categories', hasDropdown: true }
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-classic">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side - Cart and User */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center p-0">
                0
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="جستجو برای عطر و ادکلن..."
                className="w-full pr-10 card-gradient border-gray-300 rounded-full h-10 focus:border-black"
              />
            </div>
          </div>

          {/* Right Side - Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gradient-classic">
              اتحاد
            </div>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg py-2 transition-colors ${
                      item.active ? 'text-black font-bold' : 'text-gray-700 hover:text-black'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center justify-center space-x-8 space-x-reverse py-3 border-t border-gray-100">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-1 text-sm transition-colors ${
                item.active 
                  ? 'text-black font-bold' 
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

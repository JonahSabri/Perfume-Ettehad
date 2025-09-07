"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Menu, ShoppingBag, Heart, User, Search } from 'lucide-react'

export default function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'خانه', href: '/' },
    { name: 'مجموعه‌ها', href: '/shop' },
    { name: 'درباره', href: '/about' },
    { name: 'تماس', href: '/contact' }
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-[0.3em]">
            پرشین
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light tracking-[0.2em] transition-colors hover:text-gray-600 uppercase"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6 space-x-reverse">
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-gray-100">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
              <Heart className="h-4 w-4" />
              <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-black text-white">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
              <ShoppingBag className="h-4 w-4" />
              <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-black text-white">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-gray-100">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-6 mt-12">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-light tracking-[0.2em] transition-colors hover:text-gray-600 py-2 uppercase"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t pt-6 mt-6 space-y-4">
                    <Button variant="ghost" className="w-full justify-start font-light">
                      <User className="h-4 w-4 ml-3" />
                      حساب کاربری
                    </Button>
                    <Button variant="ghost" className="w-full justify-start font-light">
                      <Search className="h-4 w-4 ml-3" />
                      جستجو
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

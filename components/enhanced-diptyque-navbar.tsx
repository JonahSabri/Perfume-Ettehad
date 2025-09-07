"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'

export default function EnhancedDiptyqueNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'عطرها', href: '/shop' },
    { name: 'جدید و ترند', href: '/new' },
    { name: 'وبلاگ', href: '/blog' },
    { name: 'درباره ما', href: '/about' },
    { name: 'چرا اتحاد؟', href: '/why-ettehad' }
  ]

  return (
    <>
      {/* Enhanced Top Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient text-center py-4 px-4 text-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-move-bg"></div>
          <p className="font-medium text-white relative z-10 animate-pulse-soft">
            🌟 کشف کنید عطرهای لوکس اروپایی اتحاد - تجربه‌ای منحصر به فرد از زیبایی و اصالت 🌟
          </p>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors hover-scale"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-luxury shadow-luxury-lg border-b border-gray-200' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-6">
          {/* Top Row */}
          <div className="flex h-24 items-center justify-between">
            {/* Enhanced Search */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative hidden md:block">
                <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="جستجوی عطر لوکس..."
                  className="w-80 pr-14 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl h-14 focus:bg-white focus:shadow-luxury-lg transition-all duration-500 hover-lift"
                />
              </div>
            </div>

            {/* Enhanced Logo */}
            <Link href="/" className="text-center group">
              <div className="text-4xl font-bold tracking-wider group-hover:scale-110 transition-transform duration-500 text-gradient animate-pulse-glow">
                اتحاد
              </div>
              <div className="text-sm tracking-[0.4em] text-gray-600 opacity-80 animate-fade-in-up">
                ETTEHAD LUXURY
              </div>
            </Link>

            {/* Enhanced Actions */}
            <div className="flex items-center space-x-6 space-x-reverse">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-gray-100 rounded-full w-12 h-12 hover-scale">
                <User className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 rounded-full w-12 h-12 hover-scale">
                <ShoppingBag className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs rounded-full h-7 w-7 flex items-center justify-center p-0 animate-pulse-glow">
                  3
                </Badge>
              </Button>

              {/* Enhanced Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100 rounded-full w-12 h-12 hover-scale">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-96 bg-white">
                  <div className="flex flex-col space-y-8 mt-12">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="جستجوی عطر لوکس..."
                        className="w-full pr-14 border-2 border-gray-200 rounded-2xl h-14 focus:border-purple-500 transition-all duration-300"
                      />
                    </div>
                    
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-xl py-4 hover:text-purple-600 transition-colors border-b border-gray-100 last:border-b-0 font-medium hover-scale"
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-12 space-x-reverse py-6 border-t border-gray-100">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base hover:text-purple-600 transition-all duration-300 whitespace-nowrap py-3 px-4 rounded-xl hover:bg-gray-50 font-medium hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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

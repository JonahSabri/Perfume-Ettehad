"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function LuxuryHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/placeholder.svg?height=1080&width=1920',
      title: 'عطر، هنر زندگی',
      subtitle: 'مجموعه‌ای از عطرهای لوکس ایرانی'
    },
    {
      image: '/placeholder.svg?height=1080&width=1920',
      title: 'اصالت در هر قطره',
      subtitle: 'تجربه‌ای منحصر به فرد از عطرسازی'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt="عطر لوکس"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] mb-8 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] mb-12 opacity-90 font-light">
            {slides[currentSlide].subtitle}
          </p>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-lg tracking-[0.2em]"
          >
            <Link href="/shop">
              کشف مجموعه
              <ArrowLeft className="w-5 h-5 mr-3" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-0.5 transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Award, Users, Globe, Star } from 'lucide-react'

export default function LuxuryStorySection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { icon: Award, label: 'سال تجربه', value: '25+' },
    { icon: Users, label: 'مشتری راضی', value: '50K+' },
    { icon: Globe, label: 'کشور صادرات', value: '15+' },
    { icon: Star, label: 'عطر لوکس', value: '200+' }
  ]

  return (
    <section className="py-40 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div 
        className="absolute inset-0 opacity-20 transition-transform duration-1500 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 animate-pulse-soft blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 animate-float blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-25 animate-float-reverse blur-3xl" />
      </div>

      {/* Moving geometric shapes */}
      <div className="absolute inset-0 animate-rotate-bg opacity-10">
        <div className="absolute top-1/3 left-1/6 w-32 h-32 border border-white/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 border border-white/30 rounded-full animate-float-reverse"></div>
        <div className="absolute top-2/3 left-1/2 w-20 h-20 border border-white/25 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10 animate-fade-in-left">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-6 py-3 rounded-full animate-bounce-in">
                داستان اتحاد
              </Badge>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight animate-slide-in-top">
                ۲۵ سال هنر
                <br />
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text animate-gradient-wave">
                  عطرسازی لوکس
                </span>
              </h2>
              <div className="space-y-8 text-xl text-white/90 leading-relaxed">
                <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  از سال ۱۳۷۸، اتحاد با الهام از بهترین عطرسازان اروپایی، 
                  مجموعه‌ای منحصر به فرد از عطرهای لوکس خلق کرده است.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  هر بطری عطر اتحاد نتیجه ماه‌ها تحقیق و همکاری با بهترین 
                  عطرسازان پاریس، میلان و لندن است.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  امروز اتحاد به عنوان پیشرو در صنعت عطر لوکس، محصولاتش را 
                  به بیش از ۱۵ کشور جهان صادر می‌کند.
                </p>
              </div>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-4 animate-scale-in hover-lift" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-16 h-16 mx-auto border-2 border-white/40 rounded-full flex items-center justify-center hover-scale animate-pulse-glow">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-bounce-in">
              <Link href="/about">
                <Button className="btn-luxury px-12 py-6 text-xl hover-lift">
                  داستان کامل اتحاد
                  <ArrowLeft className="w-6 h-6 mr-3" />
                </Button>
              </Link>
              <Link href="/why-ettehad">
                <Button 
                  variant="outline" 
                  className="glass border-white/40 text-white hover:bg-white/20 px-12 py-6 text-xl hover-tilt"
                >
                  چرا اتحاد؟
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Enhanced Image */}
          <div className="relative animate-fade-in-right">
            <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/20 hover-lift">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="کارگاه عطرسازی اتحاد"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -bottom-12 -left-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-3xl shadow-luxury-xl animate-float hover-scale">
              <div className="text-center space-y-3">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-sm opacity-90">عطر لوکس منحصر به فرد</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-2xl shadow-luxury-lg animate-float-reverse hover-tilt">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-xs opacity-90">سال تجربه</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

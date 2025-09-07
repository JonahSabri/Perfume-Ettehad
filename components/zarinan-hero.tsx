"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ZarinanHero() {
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

  return (
    <section className="hero-gradient min-h-[600px] relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse bg-gradient-to-r from-purple-500/30 to-pink-500/30"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute top-32 right-20 w-16 h-16 border-2 border-purple-300 rounded-full animate-pulse delay-1000 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-32 w-12 h-12 border-2 border-pink-300 rounded-full animate-pulse delay-2000 bg-gradient-to-r from-purple-600/25 to-indigo-500/25"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-10 w-14 h-14 border-2 border-indigo-300 rounded-full animate-pulse delay-3000 bg-gradient-to-r from-violet-500/20 to-purple-500/20"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.025}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-32 right-1/3 w-10 h-10 border-2 border-violet-300 rounded-full animate-pulse delay-4000 bg-gradient-to-r from-purple-400/30 to-pink-400/30"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1 top-1/4 left-1/4" />
        <div className="particle particle-2 top-1/3 right-1/3" />
        <div className="particle particle-3 bottom-1/4 left-1/3" />
        <div className="particle particle-1 top-1/2 right-1/4" />
        <div className="particle particle-2 bottom-1/3 right-1/2" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Right Side - Content */}
          <div className="text-right text-white space-y-6 order-2 lg:order-1 animate-fade-in-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              عطرهایی از جنس لبخند
            </h1>
            <p className="text-xl opacity-90">
              تا ۳۰% تخفیف ویژه
            </p>
            <p className="text-lg opacity-80">
              بهترین برندهای عطر جهان با تضمین اصالت
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-classic text-lg px-8 py-3 hover-lift">
                شروع خرید
              </Button>
              <Button className="btn-outline-classic text-lg px-8 py-3 hover-lift border-white text-white hover:bg-white hover:text-black">
                مشاهده کاتالوگ
              </Button>
            </div>
          </div>

          {/* Left Side - 3D Animated Perfume */}
          <div className="relative order-1 lg:order-2 animate-fade-in-left">
            <div className="perfume-container">
              {/* 3D Perfume Bottle */}
              <div className="perfume-bottle">
                {/* Bottle Body */}
                <div className="bottle-body">
                  <div className="bottle-front"></div>
                  <div className="bottle-back"></div>
                  <div className="bottle-left"></div>
                  <div className="bottle-right"></div>
                  <div className="bottle-top"></div>
                  <div className="bottle-bottom"></div>
                </div>
                
                {/* Perfume Liquid */}
                <div className="perfume-liquid">
                  <div className="liquid-surface"></div>
                </div>
                
                {/* Bottle Cap */}
                <div className="bottle-cap">
                  <div className="cap-top"></div>
                  <div className="cap-side"></div>
                </div>
                
                {/* Brand Label */}
                <div className="brand-label">
                  <div className="label-text">اتحاد</div>
                  <div className="label-subtext">ETTEHAD</div>
                </div>
                
                {/* Spray Nozzle */}
                <div className="spray-nozzle">
                  <div className="nozzle-body"></div>
                  <div className="nozzle-tip"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="floating-elements">
                <div className="scent-particle scent-1"></div>
                <div className="scent-particle scent-2"></div>
                <div className="scent-particle scent-3"></div>
                <div className="scent-particle scent-4"></div>
                <div className="scent-particle scent-5"></div>
              </div>
              
              {/* Light Rays */}
              <div className="light-rays">
                <div className="ray ray-1"></div>
                <div className="ray ray-2"></div>
                <div className="ray ray-3"></div>
              </div>
              
              {/* Reflection */}
              <div className="bottle-reflection"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-gray-100 to-transparent"></div>
    </section>
  )
}

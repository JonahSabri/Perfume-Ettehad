"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DiptyqueHero() {
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
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-5 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-transparent to-gray-100"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Image */}
        <div className="flex-1 relative">
          <Image
            src="https://sjc.microlink.io/XSoY-YMMWwEuqLzxzEqjS5cnBw91oKZJEZgWBx6_iMJvoAUxG48SucZ-F-uPQ44-fvypl4a0lb2yj4EFc3Xn3g.jpeg"
            alt="عطر لوکس پرشین"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-black">
            افسانه‌ای، بازنویسی شده
          </h2>
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            عشق و روان، افسانه‌ای منحصر به فرد. عطری جدید و صمیمی.
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

const videoSlides = [
  {
    id: 1,
    title: 'Midnight Elegance',
    subtitle: 'عطر شب‌های جذاب',
    description: 'ترکیبی لوکس از وانیل، عنبر و گل یاس که شما را به دنیای رویاهای شبانه می‌برد.',
    videoUrl: '/placeholder-video-1.mp4',
    posterUrl: '/luxury-persian-rose-perfume.png'
  },
  {
    id: 2,
    title: 'Royal Oud',
    subtitle: 'عطر سلطنتی مردانه',
    description: 'عود خالص با نت‌های چرم و چوب صندل برای مردانی که قدرت و اصالت را دوست دارند.',
    videoUrl: '/placeholder-video-2.mp4',
    posterUrl: '/placeholder-09heq.png'
  },
  {
    id: 3,
    title: 'Garden of Dreams',
    subtitle: 'عطر بهاری زنانه',
    description: 'مجموعه‌ای از گل‌های بهاری با نت‌های تازه که احساس شادی و زیبایی را برمی‌انگیزد.',
    videoUrl: '/placeholder-video-3.mp4',
    posterUrl: '/elegant-jasmine-perfume.png'
  }
]

export default function VideoCarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
      }, 8000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide && isPlaying) {
          video.play().catch(() => {
            setIsPlaying(false)
          })
        } else {
          video.pause()
        }
      }
    })
  }, [currentSlide, isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    setIsAutoPlaying(!isPlaying)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 1000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 1000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 1000)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-move-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/40"></div>
        </div>
        <div className="absolute inset-0 animate-rotate-bg opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Video Slides */}
      <div className="relative h-full">
        {videoSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1500"
              style={{ backgroundImage: `url(${slide.posterUrl})` }}
            />
            
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full object-cover"
              poster={slide.posterUrl}
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={slide.videoUrl} type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
          </div>
        ))}
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1 top-1/4 left-1/4" />
        <div className="particle particle-2 top-1/3 right-1/3" />
        <div className="particle particle-3 bottom-1/4 left-1/3" />
        <div className="particle particle-1 top-1/2 right-1/4" />
        <div className="particle particle-2 bottom-1/3 right-1/2" />
        <div className="particle particle-3 top-3/4 left-1/2" />
        <div className="particle particle-1 bottom-1/2 left-1/4" />
        <div className="particle particle-2 top-1/6 right-1/6" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-5xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-shadow-glow animate-pulse-glow">
              {videoSlides[currentSlide].title}
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-10 opacity-90 animate-slide-in-top">
              {videoSlides[currentSlide].subtitle}
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-80 max-w-3xl mx-auto leading-relaxed animate-bounce-in">
              {videoSlides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Button className="btn-luxury px-12 py-6 text-xl hover-lift">
                کشف مجموعه
              </Button>
              <Button 
                variant="outline" 
                className="glass border-white/40 text-white hover:bg-white/20 px-12 py-6 text-xl hover-tilt"
              >
                داستان اتحاد
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-y-0 left-8 flex items-center z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="glass-dark text-white hover:bg-white/30 w-16 h-16 rounded-full hover-lift animate-pulse-soft"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-8 flex items-center z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="glass-dark text-white hover:bg-white/30 w-16 h-16 rounded-full hover-lift animate-pulse-soft"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      </div>

      {/* Enhanced Play/Pause Button */}
      <div className="absolute bottom-32 right-8 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          className="glass-dark text-white hover:bg-white/30 w-16 h-16 rounded-full hover-scale animate-pulse-glow"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </Button>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {videoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white/10 via-white/20 to-white/10 z-20">
        <div 
          className="h-full bg-gradient-to-r from-white via-blue-200 to-white transition-all duration-1000 ease-out animate-gradient-wave"
          style={{ 
            width: `${((currentSlide + 1) / videoSlides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  )
}

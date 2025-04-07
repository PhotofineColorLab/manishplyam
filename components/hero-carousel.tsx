"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroCarouselProps {
  images: string[]
  headings: string[]
  descriptions: string[]
}

export function HeroCarousel({ images, headings, descriptions }: HeroCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [contentVisible, setContentVisible] = useState(false)

  // Automatically advance slides
  useEffect(() => {
    // Hide content when slide changes
    setContentVisible(false)
    
    // Show content after a short delay
    const contentTimer = setTimeout(() => {
      setContentVisible(true)
    }, 500)
    
    // Set up automatic slide advancement
    const slideTimer = setTimeout(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 6000) // Change slide every 6 seconds

    return () => {
      clearTimeout(slideTimer)
      clearTimeout(contentTimer)
    }
  }, [activeSlide, images.length])

  return (
    <section className="w-full h-[500px] sm:h-[600px] md:h-[700px] relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Hero slide ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative h-full flex flex-col justify-center px-4 md:px-6 max-w-6xl mx-auto">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              <h1 
                className={`text-3xl sm:text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white canvas-font ${
                  activeSlide === index && contentVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                {headings[index]}
              </h1>
              <p className={`text-base sm:text-lg md:text-xl text-white/90 ${
                activeSlide === index && contentVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}>
                {descriptions[index]}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${
                activeSlide === index && contentVisible ? "animate-fade-in delay-400" : "opacity-0"
              }`}>
                <Link href="/products" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-[#8B5A2B] hover:bg-[#704626]">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white/20">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-6 sm:w-8 rounded-full transition-all ${
              activeSlide === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
} 
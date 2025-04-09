"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface BrandSliderProps {
  brands: string[]
  speed?: number
}

export function BrandSlider({ brands, speed = 10 }: BrandSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a seamless infinite loop animation with CSS
    const container = containerRef.current
    if (!container) return

    // Set the animation duration based on the number of brands and desired speed
    // For fewer brands, use a slower speed to make it less obvious
    const adjustedSpeed = brands.length <= 3 ? speed * 1.5 : speed
    container.style.animationDuration = `${adjustedSpeed}s`
  }, [brands, speed])

  // For fewer brands, create more repetition to make the slider appear fuller
  const repeatCount = brands.length <= 3 ? 5 : 3
  const repeatedArray = Array(repeatCount).fill(brands).flat()

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center brand-slider"
        style={{
          width: `${brands.length * repeatCount * 200}px`, // Each brand takes approximately 200px of space
        }}
      >
        {repeatedArray.map((brand, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 mx-8 w-[180px]"
            style={{
              // Add variable spacing between logos when there are fewer brands
              marginLeft: brands.length <= 3 ? '48px' : '32px',
              marginRight: brands.length <= 3 ? '48px' : '32px',
            }}
          >
            <Image
              src={brand || "/placeholder.svg"}
              width={180}
              height={80}
              alt={`Brand logo ${(index % brands.length) + 1}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


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
    container.style.animationDuration = `${speed}s`
  }, [brands, speed])

  // Triple the brands to ensure a seamless loop
  const tripleArray = [...brands, ...brands, ...brands]

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex items-center brand-slider"
        style={{
          width: `${brands.length * 3 * 200}px`, // Each brand takes approximately 200px of space
        }}
      >
        {tripleArray.map((brand, index) => (
          <div key={index} className="flex-shrink-0 mx-8 w-[180px]">
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


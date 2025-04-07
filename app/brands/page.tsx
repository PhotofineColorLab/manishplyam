"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IMAGES } from "@/lib/constants"

export default function BrandsPage() {
  const [activeTab, setActiveTab] = useState("arkitekt")
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    hero: false,
    brands: false,
  })

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    brands: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    // Make all sections visible after a timeout as a fallback
    const timeoutId = setTimeout(() => {
      setVisibleSections({
        hero: true,
        brands: true,
      });
    }, 2000); // 2 seconds fallback
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [key]: true }))
            }
          })
        },
        { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }, // Lower threshold, add rootMargin
      )

      if (ref.current) {
        observer.observe(ref.current)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
      clearTimeout(timeoutId);
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0] overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className={`space-y-2 ${visibleSections.hero ? "animate-slide-in-left" : "opacity-0"}`}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Signature Brands</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl px-2">
                Discover our exclusive in-house brands, each crafted with a unique vision and exceptional quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brand Section */}
      <section ref={sectionRefs.brands} className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2070')] bg-fixed bg-cover opacity-5"></div>

        <div className="container px-4 md:px-6 relative mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
            <div className={`space-y-4 ${visibleSections.brands ? "animate-slide-in-left" : "opacity-0"}`}>
              <span className="inline-block px-4 py-1 rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] text-sm font-medium">
                Our Exclusive Collections
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Premium Brand Collections</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl px-2">
                Each of our brands represents a unique approach to quality and design in plywood manufacturing.
              </p>
            </div>
          </div>

          <Tabs
            defaultValue="arkitekt"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-6xl mx-auto"
          >
            <TabsList
              className={`grid w-full grid-cols-3 mb-12 ${visibleSections.brands ? "animate-fade-in delay-200" : "opacity-0"}`}
            >
              {IMAGES.ownBrands.map((brand, index) => (
                <TabsTrigger
                  key={brand.name.toLowerCase()}
                  value={brand.name.toLowerCase()}
                  className="text-sm sm:text-base md:text-lg py-3 md:py-4 data-[state=active]:bg-[#8B5A2B] data-[state=active]:text-white"
                >
                  {brand.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {IMAGES.ownBrands.map((brand, brandIndex) => (
              <TabsContent
                key={brand.name.toLowerCase()}
                value={brand.name.toLowerCase()}
                className={visibleSections.brands ? "animate-fade-in delay-400" : "opacity-0"}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  {/* Brand Intro */}
                  <div className="lg:col-span-2 space-y-6">
                    <div
                      className="p-6 sm:p-8 bg-[#f8f5f0] rounded-xl animate-rotate-in"
                      style={{ animationDelay: `${100 * brandIndex}ms` }}
                    >
                      <div className="mb-6 sm:mb-8 relative h-12 sm:h-16">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain object-left w-28 sm:w-32 h-auto mb-2"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{brand.name}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{brand.description}</p>
                      <div className="flex justify-center sm:justify-start mt-6">
                        <Button className="w-full sm:w-auto bg-[#8B5A2B] hover:bg-[#704626] group">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Brand Products */}
                  <div className="lg:col-span-3 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                      {brand.products.map((product, productIndex) => (
                        <Card
                          key={product.name}
                          className="overflow-hidden group cursor-pointer animate-scale-up hover:shadow-lg transition-all duration-300"
                          style={{ animationDelay: `${200 + 100 * productIndex}ms` }}
                        >
                          <div className="aspect-square relative overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-[#8B5A2B] transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                            <div className="mt-4 flex items-center text-sm text-[#8B5A2B] font-medium">
                              <span>View details</span>
                              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Banner Image */}
                <div
                  className="mt-12 sm:mt-16 relative h-64 sm:h-80 rounded-xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                >
                  <Image
                    src={brand.bannerImage || "/placeholder.svg"}
                    alt={`${brand.name} banner`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Explore {brand.name} Collection</h3>
                      <Button className="bg-white text-[#8B5A2B] hover:bg-white/90 w-full sm:w-auto">
                      <a href="/products">
                      View Catalog
                      </a>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
} 
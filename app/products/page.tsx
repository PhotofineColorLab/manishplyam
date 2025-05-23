"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IMAGES } from "@/lib/constants"

export default function ProductsPage() {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({
    hero: false,
    products: false,
    timex: false,
    custom: false,
  })

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
    timex: useRef<HTMLDivElement>(null),
    custom: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    // Make all sections visible after a timeout as a fallback
    const timeoutId = setTimeout(() => {
      setVisibleSections({
        hero: true,
        products: true,
        timex: true,
        custom: true,
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

  const products = [
    {
      id: 1,
      name: "Premium Marine Plywood",
      description:
        "Water-resistant plywood ideal for humid environments and outdoor applications. Features exceptional durability and resistance to warping.",
      thickness: "18mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.marinePlywood,
    },
    {
      id: 2,
      name: "Decorative Veneer Plywood",
      description:
        "Beautiful wood veneer finish for furniture and interior design projects. Available in various wood finishes including teak, oak, and mahogany.",
      thickness: "12mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.veneerPlywood,
    },
    {
      id: 3,
      name: "Commercial MDF Board",
      description:
        "Medium-density fiberboard perfect for cabinetry and commercial applications. Smooth surface ideal for painting and laminating.",
      thickness: "16mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.mdfBoard,
    },
    {
      id: 4,
      name: "Blockboard Premium",
      description:
        "Solid core blockboard for heavy-duty applications requiring superior strength and stability. Ideal for shelving and furniture.",
      thickness: "19mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.blockboard,
    },
    {
      id: 5,
      name: "Laminated Particle Board",
      description:
        "Pre-laminated particle board with decorative finish on both sides. Perfect for quick furniture assembly and interior partitions.",
      thickness: "18mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.particleBoard,
    },
    {
      id: 6,
      name: "Flexible Plywood",
      description:
        "Specially designed flexible plywood for curved applications. Ideal for creating arches, curved panels, and designer furniture.",
      thickness: "8mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.flexiblePlywood,
    },
    {
      id: 7,
      name: "Fire Resistant Plywood",
      description:
        "Safety-focused plywood with fire-retardant properties. Essential for spaces where fire safety standards are critical.",
      thickness: "15mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.fireResistantPlywood,
    },
    {
      id: 8,
      name: "Shuttering Plywood",
      description:
        "High-strength plywood designed for concrete formwork and construction applications. Delivers excellent load-bearing capacity.",
      thickness: "18mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.shutteringPlywood,
    },
    {
      id: 9,
      name: "High Quality Particle Board",
      description:
        "Engineered wood product manufactured from wood chips, sawmill shavings, and sawdust. Ideal for furniture, cabinets, and shelving.",
      thickness: "16mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.particleBoard,
    },
    {
      id: 10,
      name: "HDHMR Board",
      description:
        "High-Density High Moisture Resistant board with superior screw-holding capacity and moisture resistance. Perfect for kitchens and bathrooms.",
      thickness: "17mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.hdhmrBoard,
    },
    {
      id: 11,
      name: "ABRAZE Board",
      description:
        "Premium multi-layered board with excellent durability and abrasion resistance. Ideal for high-traffic commercial spaces and retail fixtures.",
      thickness: "18mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.abrazeBoard,
    },
    {
      id: 12,
      name: "Embossed-HDF Board",
      description:
        "High-Density Fiberboard with decorative embossed patterns. Perfect for wall panels, furniture components, and decorative interiors.",
      thickness: "12mm",
      dimensions: "8ft x 4ft",
      image: IMAGES.products.embossedHdfBoard,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0] overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className={`space-y-2 ${visibleSections.hero ? "animate-slide-in-left" : "opacity-0"}`}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Product Range</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl px-2">
                Explore our comprehensive range of premium plywood solutions for all your needs.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center px-4 ${visibleSections.hero ? "animate-fade-in delay-400" : "opacity-0"}`}
            >
              <Link href="/brands" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#8B5A2B] hover:bg-[#704626] group">
                  View Our Brands
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands Slider */}
      <section className="w-full py-8 md:py-12 bg-white border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl animate-slide-in-left">
                Our Partner Brands
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-lg animate-slide-in-left delay-200">
                We collaborate with the best in the industry to offer you premium quality products
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-6 overflow-hidden">
            <div className="w-full relative">
              <div className="brand-slider">
                {/* First set of logos */}
                {IMAGES.partnerBrands.map((brand, index) => (
                  <div key={`first-${index}`} className="w-[180px] mx-8 flex-shrink-0">
                    <Image
                      src={brand || "/placeholder.svg"}
                      width={180}
                      height={80}
                      alt={`Brand logo ${index + 1}`}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
                {/* Second set of logos (for continuous effect) */}
                {IMAGES.partnerBrands.map((brand, index) => (
                  <div key={`second-${index}`} className="w-[180px] mx-8 flex-shrink-0">
                    <Image
                      src={brand || "/placeholder.svg"}
                      width={180}
                      height={80}
                      alt={`Brand logo ${index + 1}`}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Products Grid */}
      <section ref={sectionRefs.products} className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className={`space-y-2 ${visibleSections.products ? "animate-slide-in-left" : "opacity-0 max-sm:opacity-100"}`}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl px-2">
                Explore our comprehensive range of premium plywood solutions for all your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300 ${
                  visibleSections.products ? "animate-scale-up" : "opacity-0 sm:opacity-0 max-sm:animate-scale-up"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-[#8B5A2B] transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-grow">{product.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Thickness:</span> {product.thickness}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Dimensions:</span> {product.dimensions}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-[#8B5A2B] hover:bg-[#704626] group">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timex Brand Section */}
      <section ref={sectionRefs.timex} className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className={`space-y-2 ${visibleSections.timex ? "animate-slide-in-left" : "opacity-0"}`}>
              <span className="inline-block px-4 py-1 rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] text-sm font-medium">
                Featured Brand
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{IMAGES.TIMEX_BRAND.name}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl px-2">
                {IMAGES.TIMEX_BRAND.description}
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mt-8">
            {/* Brand image and logo */}
            <div className={`relative overflow-hidden rounded-xl ${visibleSections.timex ? "animate-scale-up" : "opacity-0"}`}>
              <div className="aspect-square relative">
                <Image
                  src={IMAGES.TIMEX_BRAND.bannerImage}
                  alt={IMAGES.TIMEX_BRAND.name}
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-4 rounded-xl">
                    <Image
                      src={IMAGES.TIMEX_BRAND.logo}
                      alt={`${IMAGES.TIMEX_BRAND.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className={`space-y-6 ${visibleSections.timex ? "animate-fade-in delay-300" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold">Timex Product Range</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {IMAGES.TIMEX_BRAND.products.map((product, index) => (
                  <Card
                    key={product.name}
                    className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={product.image}
                        width={300}
                        height={300}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold group-hover:text-[#8B5A2B] transition-colors">{product.name}</h4>
                      <p className="text-sm text-muted-foreground mt-2 flex-grow">{product.description}</p>
                      <div className="mt-4 text-sm">
                        <Link href="/contact" className="flex items-center text-[#8B5A2B] font-medium group">
                          <span>Get a Quote</span>
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#8B5A2B] hover:bg-[#704626] group">
                    Enquire About Timex Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section ref={sectionRefs.custom} className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 px-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-4xl ${visibleSections.custom ? "animate-slide-in-left" : "opacity-0"}`}
                >
                  Custom Solutions
                </h2>
                <p
                  className={`text-muted-foreground md:text-lg ${visibleSections.custom ? "animate-slide-in-left delay-200" : "opacity-0"}`}
                >
                  Can't find exactly what you're looking for? We offer custom plywood solutions tailored to your
                  specific requirements.
                </p>
                <p
                  className={`text-muted-foreground md:text-lg ${visibleSections.custom ? "animate-slide-in-left delay-400" : "opacity-0"}`}
                >
                  Whether you need special dimensions, unique finishes, or specific performance characteristics, our
                  team can create the perfect plywood solution for your project.
                </p>
                <div className={`pt-4 flex justify-center sm:justify-start ${visibleSections.custom ? "animate-fade-in delay-600" : "opacity-0"}`}>
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-[#8B5A2B] hover:bg-[#704626] group">
                      Contact Us for Custom Orders
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`mx-auto w-full max-w-[500px] lg:max-w-none ${visibleSections.custom ? "animate-scale-up delay-300" : "opacity-0"}`}
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={IMAGES.customSolutions || "/placeholder.svg"}
                  width={600}
                  height={600}
                  alt="Custom plywood solutions"
                  className="mx-auto aspect-square object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BrandSlider } from "@/components/brand-slider"
import { HeroCarousel } from "@/components/hero-carousel"
import { IMAGES } from "@/lib/constants"

export default function Home() {
  // Hero content for each slide
  const heroContent = [
    {
      heading: "Premium Plywood Solutions",
      description: "Crafting excellence in plywood since 1995. Quality materials, expert craftsmanship, and customer satisfaction guaranteed.",
      image: IMAGES.heroCarousel[0]
    },
    {
      heading: "Elevate Your Home & Business",
      description: "Transform your spaces with our durable, elegant plywood products designed for lasting performance.",
      image: IMAGES.heroCarousel[1]
    },
    {
      heading: "Sustainable Wood Products",
      description: "Environmentally conscious materials with the perfect balance of beauty, strength, and durability.",
      image: IMAGES.heroCarousel[2]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <HeroCarousel 
        images={heroContent.map(item => item.image)} 
        headings={heroContent.map(item => item.heading)}
        descriptions={heroContent.map(item => item.description)}
      />

      {/* Brands We've Worked With */}
      <section className="w-full py-12 md:py-16 lg:py-20 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-in-left">
                Our Premium Brands
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                Premium Brands Owned By Manish Plyam Studio
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-10 overflow-hidden">
            <div className="w-full relative">
              <div className="brand-slider">
                {/* First set of logos */}
                {IMAGES.brands.map((brand, index) => (
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
                {IMAGES.brands.map((brand, index) => (
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

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-in-left">
                Why Choose Us
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                At Manish Plyam Studio, we stand out with our commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {IMAGES.whyChooseUs.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white h-full"
              >
                <div className="relative h-16 w-16 mb-2 flex-shrink-0">
                  <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-in-left">
                Featured Products
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                Discover our most popular plywood solutions for your projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Premium Marine Plywood",
                description: "Water-resistant plywood ideal for humid environments and outdoor applications.",
                image: IMAGES.products.marinePlywood,
              },
              {
                name: "Decorative Veneer Plywood",
                description: "Beautiful wood veneer finish for furniture and interior design projects.",
                image: IMAGES.products.veneerPlywood,
              },
              {
                name: "Commercial MDF Board",
                description: "Medium-density fiberboard perfect for cabinetry and commercial applications.",
                image: IMAGES.products.mdfBoard,
              },
            ].map((product, i) => (
              <Card key={i} className="overflow-hidden h-full flex flex-col">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    width={300}
                    height={300}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-grow">{product.description}</p>
                  <div className="flex justify-center mt-4">
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-[#8B5A2B] hover:bg-[#704626]">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button size="lg" className="bg-[#8B5A2B] hover:bg-[#704626]">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-in-left">
                Our Certifications
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                We adhere to the highest industry standards and have been recognized for our quality and commitment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-10 md:grid-cols-4">
            {IMAGES.certifications.map((cert, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="relative h-32 w-32">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-medium text-center">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-slide-in-left">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                role: "Interior Designer",
                content:
                  "The quality of plywood from Manish Plyam Studio is exceptional. My clients are always impressed with the finish and durability.",
              },
              {
                name: "Priya Sharma",
                role: "Home Owner",
                content:
                  "We renovated our entire kitchen with their products. The quality is outstanding and the service was professional from start to finish.",
              },
              {
                name: "Vikram Singh",
                role: "Construction Manager",
                content:
                  "For commercial projects, I always rely on Manish Plyam Studio. Their products meet all industry standards and last for years.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="flex flex-col items-start space-y-4 rounded-lg border bg-white p-6 shadow-sm h-full"
              >
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#8B5A2B] text-[#8B5A2B]" />
                  ))}
                </div>
                <p className="text-muted-foreground flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center space-x-2 mt-auto">
                  <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center">
                    <span className="text-sm font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


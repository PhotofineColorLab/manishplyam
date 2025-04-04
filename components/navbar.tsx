"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { IMAGES } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Brands", href: "/brands" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY

      if (totalHeight > 0) {
        const progress = (scrolled / totalHeight) * 100
        setScrollProgress(progress)
      }
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center">
        <div className="flex items-center mr-auto pl-0">
          <Link href="/" className="flex items-center">
            <div className="relative h-24 w-96">
              <Image
                src={IMAGES.logo || "/placeholder.svg"}
                alt="Manish Plyam Studio Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-base font-medium transition-colors hover:text-[#8B5A2B] relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5A2B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-[#8B5A2B] hover:bg-[#704626]">Get a Quote</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-10">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-xl font-medium transition-colors hover:text-[#8B5A2B]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#8B5A2B] hover:bg-[#704626]">Get a Quote</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="h-1 bg-gray-200">
        <div className="h-full bg-[#8B5A2B] transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </header>
  )
}


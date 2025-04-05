"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IMAGES } from "@/lib/constants"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("branch1")

  const branches = [
    {
      id: "branch1",
      name: "Nanded (Head Office)",
      address: "MIDC Rd, MIDC, Tirupatinagar, Nanded, Balirampur, Maharashtra 431603",
      phone: "+91 9404900094",
      email: "team@manishplyam.com",
      map: IMAGES.contact.branches.delhi,
    },
    {
      id: "branch2",
      name: "Nanded Branch",
      address: "5,6 Gurukrupa Business Center, Near Mahaveer Chowk, Nanded - Maharashtra, India 431601",
      phone: "+91 9404900094",
      email: "nirajrathi7@gmail.com",
      map: IMAGES.contact.branches.mumbai,
    },
    {
      id: "branch3",
      name: "Jalna Branch",
      address: "S.P. Heights, Beside Axis Bank, Old Mondha Road, Jalna- 431203",
      phone: "+91 7798900094",
      email: "nirajrathi7@gmail.com",
      map: IMAGES.contact.branches.bangalore,
    },
    {
      id: "branch4",
      name: "Parbhani Branch",
      address:
        "Meenatai Thakare Road, New Mondha Road, Parbhani- 431401",
      phone: "+91 8055900094",
      email: "nirajrathi7@gmail.com",
      map: IMAGES.contact.branches.kolkata,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-slide-in-left">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                We're here to help with all your plywood needs. Reach out to us with any questions or inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold animate-slide-in-left">Send Us a Message</h2>
                <p className="text-muted-foreground mt-2 animate-slide-in-left delay-200">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input placeholder="First Name" required />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Last Name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" required />
                </div>
                <div className="space-y-2">
                  <Input type="tel" placeholder="Phone Number" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Subject" required />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your Message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full bg-[#8B5A2B] hover:bg-[#704626]">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information with Tabs */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold animate-slide-in-left">Our Locations</h2>
                <p className="text-muted-foreground mt-2 animate-slide-in-left delay-200">
                  Find us at any of our branches across India.
                </p>
              </div>

              <Tabs defaultValue="branch1" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex flex-wrap gap-2 mb-6">
                  {branches.map((branch) => (
                    <TabsTrigger 
                      key={branch.id} 
                      value={branch.id} 
                      className="flex-1 min-w-[80px] text-xs sm:text-sm py-3 px-2 sm:px-4"
                    >
                      {branch.name.split(" ")[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {branches.map((branch) => (
                  <TabsContent key={branch.id} value={branch.id} className="space-y-6 p-2 sm:p-4">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">{branch.name}</h3>

                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[#8B5A2B] mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Address</h4>
                          <p className="text-muted-foreground text-sm sm:text-base">{branch.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-[#8B5A2B] mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-muted-foreground text-sm sm:text-base">{branch.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-[#8B5A2B] mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-muted-foreground text-sm sm:text-base">{branch.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg overflow-hidden h-[250px] sm:h-[300px] relative mt-6">
                      <iframe
                        src={branch.map || "/placeholder.svg"}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={`${branch.name} location map`}
                        className="absolute inset-0"
                      ></iframe>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-8 p-4 bg-[#f8f5f0] rounded-lg">
                <h3 className="font-medium text-lg mb-3">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base">Monday - Friday:</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base">Saturday:</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base">Sunday:</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-in-left">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                Find answers to common questions about our products and services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-10">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What types of plywood do you offer?",
                  answer:
                    "We offer a wide range of plywood products including marine plywood, decorative veneer plywood, commercial MDF, blockboard, particle board, flexible plywood, fire-resistant plywood, shuttering plywood, bamboo plywood, and high-gloss acrylic plywood.",
                },
                {
                  question: "Do you offer custom sizes and thicknesses?",
                  answer:
                    "Yes, we can customize our plywood products to meet your specific requirements. Please contact our sales team to discuss your custom order needs.",
                },
                {
                  question: "What is the minimum order quantity?",
                  answer:
                    "Our minimum order quantity varies depending on the product. For standard products, you can purchase as little as a single sheet. For custom orders, there may be a minimum requirement.",
                },
                {
                  question: "Do you provide delivery services?",
                  answer:
                    "Yes, we offer delivery services within the city and to surrounding areas. Delivery charges may apply based on distance and order size.",
                },
                {
                  question: "What is your warranty policy?",
                  answer:
                    "We offer a 5-year warranty on most of our plywood products against manufacturing defects. Please refer to the specific product documentation for detailed warranty information.",
                },
                {
                  question: "Can I visit your showroom to see the products?",
                  answer:
                    "We welcome you to visit our showroom during business hours to see our products firsthand. Our staff will be happy to assist you and answer any questions.",
                },
                {
                  question: "Do you offer installation services?",
                  answer:
                    "We do not directly provide installation services, but we can recommend trusted contractors who specialize in working with our products.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}


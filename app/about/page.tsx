import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { IMAGES } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-slide-in-left">
                About Manish Plyam Studio
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                Learn about our journey, our values, and the people behind our premium plywood solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-in-left">Our Story</h2>
                <p className="text-muted-foreground md:text-lg animate-slide-in-left delay-200">
                  Founded in 1995 by Manish Loya, Manish Plyam Studio began as a small workshop with a big vision: to
                  provide the highest quality plywood products to customers across India.
                </p>
                <p className="text-muted-foreground md:text-lg animate-slide-in-left delay-400">
                  What started as a modest operation with just three employees has grown into one of the region's most
                  respected plywood manufacturers, with a state-of-the-art facility and a team of over 50 skilled
                  craftsmen and professionals.
                </p>
                <p className="text-muted-foreground md:text-lg animate-slide-in-left delay-600">
                  Throughout our journey, we've remained committed to our founding principles: using only the finest
                  materials, employing expert craftsmanship, and putting customer satisfaction at the heart of
                  everything we do.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <Image
                src={IMAGES.about.workshop || "/placeholder.svg"}
                width={600}
                height={600}
                alt="Our workshop"
                className="mx-auto aspect-square rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Moved above Milestones */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-in-left">
                Meet Our Leadership
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                The dedicated team behind Manish Plyam Studio's success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-10 md:grid-cols-2">
            {[
              {
                name: "Manish Loya",
                role: "Founder & CEO",
                bio: "Manish brings his design expertise to ensure our products meet the highest aesthetic standards.",
                image: IMAGES.about.leadership[0],
              },
              {
                name: "Mayur Loya",
                role: "Creative Director",
                bio: "Mayur brings his financial expertise to ensure our company runs smoothly and efficiently.",
                image: IMAGES.about.leadership[1],
              }
            ].map((leader, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    width={160}
                    height={160}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                  <p className="mt-2 text-muted-foreground">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Carousel */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-in-left">
                Milestones Achieved
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                Our journey of growth and excellence over the years.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.about.milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold mr-2">{milestone.year}</span>
                      <div className="h-px flex-grow bg-white/30"></div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-white/80">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guiding Light */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-in-left">
                Our Guiding Light
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl animate-slide-in-left delay-200">
                The values and principles that drive everything we do at Manish Plyam Studio.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-10 md:grid-cols-2">
            {[
              {
                title: "Quality Above All",
                description: "We never compromise on the quality of our materials or craftsmanship.",
              },
              {
                title: "Customer-Centric Approach",
                description: "Every decision we make is guided by what's best for our customers.",
              },
              {
                title: "Environmental Responsibility",
                description: "We're committed to sustainable practices and responsible sourcing.",
              },
              {
                title: "Innovation & Improvement",
                description: "We continuously seek better ways to serve our customers and improve our products.",
              },
              {
                title: "Integrity & Transparency",
                description: "We conduct our business with honesty and openness in all our dealings.",
              },
              {
                title: "Community Engagement",
                description: "We believe in giving back to the communities where we live and work.",
              },
            ].map((value, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-[#8B5A2B]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


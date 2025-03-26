import Image from "next/image"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "Advancing Healthcare Access with AI Chatbots",
    description:
      "Millions of underserved patients now have 24/7 access to healthcare guidance through our AI-powered chatbot.",
    image: "/caseStudy/images (8).jpeg",
  },
  {
    title: "Empowering Rural Communities with E-Learning",
    description:
      "Local schools in rural areas benefit from our accessible digital education platform with downloadable offline content.",
    image: "/caseStudy/UX-Design-Trends-for-E-commerce-Websites-in-2024-696x390.webp",
  },
  {
    title: "Digital Literacy for Underserved Students",
    description: "Our program provides quality tech education to students with limited access to digital resources.",
    image: "/caseStudy/john-001-1024x683.webp",
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold">Case Studies</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="overflow-hidden rounded-lg border">
              <div className="relative h-[200px] w-full">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold">{study.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{study.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}


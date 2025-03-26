import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import OurServices from "@/components/our-services"
import Testimonials from "@/components/testimonials"
import CaseStudies from "@/components/case-studies"
import CallToAction from "@/components/call-to-action"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Digital for Humanity Logo" width={40} height={40} />
            <span className="text-lg font-semibold">Digital for Humanity</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm font-medium hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-medium hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm font-medium hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-sm font-medium hover:text-primary">
                  Career
                </Link>
              </li>
            </ul>
          </nav>
          <div className="relative">
            <Input type="search" placeholder="Search..." className="w-[200px] pr-8" />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <CaseStudies />
      <CallToAction />
      <BlogSection />
      <Footer />
    </main>
  )
}


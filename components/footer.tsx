import Link from "next/link"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/strategy" className="text-gray-300 hover:text-white">
                  Creative Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/personalization" className="text-gray-300 hover:text-white">
                  Personalization
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="text-gray-300 hover:text-white">
                  Human-Centered AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-gray-300 hover:text-white">
                  Experience Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Platform</h3>
            <p className="text-gray-300">
              At Digital for Humanity, we create impactful, human-centered digital experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>123 Digital Street,</p>
              <p>Tech City, Country</p>
              <p className="mt-2">contact@digital-for-humanity.com</p>
              <p>+1 (123) 456-7890</p>
            </address>

            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © 2025 Digital for Humanity. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}


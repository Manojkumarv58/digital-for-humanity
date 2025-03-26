

import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section
      className="relative bg-gray-900 py-16 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/742810d8a7e0b54108e4d9abc5d8dab5 (1).gif.crdownload')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for better readability */}
      <div className="relative container mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">Let's Create Something Meaningful</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300">
          Partner with us to craft exceptional digital experiences that drive real change. Let's collaborate and
          innovate together.
        </p>
        <Button className="rounded-full bg-white text-gray-900 hover:bg-gray-100">Contact Us</Button>
      </div>
    </section>
  )
}


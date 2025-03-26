import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    company: "Tech Innovators",
    testimonial: "The team at Digital for Humanity consistently delivers exceptional results.",
    avatar: "/testomonial/pexels-timothypictures-2826131.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Head of Marketing",
    company: "Global Brands",
    testimonial: "Our digital presence has completely transformed thanks to their strategic approach.",
    avatar: "/testomonial/pexels-vanessa-garcia-6325958-removebg-preview (1).png",
  },
  {
    name: "David Peterson",
    title: "Project Manager",
    company: "Future Solutions",
    testimonial: "The most reliable digital partner we've worked with in years.",
    avatar: "/testomonial/pexels-vinicius-wiesehofer-289347-1130624.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">
                    {testimonial.name}, {testimonial.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}


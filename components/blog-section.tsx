import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of Digital Transformation",
    description: "The digital landscape is constantly evolving. Learn how to stay ahead of the curve.",
    image: "/blog/1679555836235.jpeg",
  },
  {
    title: "Personalization in the Age of AI",
    description: "AI-driven personalization is revolutionizing how businesses connect with their customers.",
    image: "/blog/d2224dc1d973685864cefe9aa9c53122.jpg",
  },
  {
    title: "Building Trust Through Transparency",
    description: "Transparency and ethical data practices build trust with your audience.",
    image: "/blog/pexels-michelangelo-buonarroti-8728560.jpg",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Blogs</h2>
          <Link
            href="/blog"
            className="rounded-full border border-black px-4 py-1 text-sm font-medium hover:bg-gray-100"
          >
            Check our Blog
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 h-[200px] w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{post.description}</p>
              <Button variant="link" className="p-0 text-black hover:text-blue-500">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold">Why Choose Us?</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              At Digital for Humanity, we believe in creating meaningful and human-centered digital experiences. With a
              focus on creativity, personalization, and impact, we help businesses transform their digital presence
              through innovative design, strategic thinking, and cutting-edge technology. Our expertise spans across
              UX/UI design, web development, branding, and content strategy, ensuring that every solution we craft is
              tailored to enhance engagement, drive results, and create lasting value. Partner with us to build
              something truly exceptional.
            </p>
            <Link href="#" className="text-sm font-medium text-blue-500 hover:underline">
              read more
            </Link>
          </div>
          <div className="relative flex items-start justify-center gap-8">
            {/* First Image */}
            <div className="relative h-[250px] w-[200px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/pexels-olia-danilevich-8145341.jpg"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
            {/* Second Image positioned to the right with proper spacing and lower start */}
            <div className="relative h-[250px] w-[200px] overflow-hidden rounded-xl shadow-lg mt-20">
              <Image
                src="/pexels-thirdman-7652135.jpg"
                alt="Business meeting discussion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

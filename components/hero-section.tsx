
// "use client"
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center py-16"
//       style={{ backgroundImage: "url('/linedimage.png')" }}
//     >
//       <div className="container mx-auto grid gap-8 md:grid-cols-2">
//         <div className="flex flex-col justify-center space-y-6 text-white">
//           <h1 className="text-4xl font-bold leading-tight md:text-5xl">
//             Empowering Digital Transformation for Humanity
//           </h1>
//           <p className="text-lg text-gray-200">
//             We create human-centered digital experiences that drive real impact
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Button className="rounded-full bg-blue-500 hover:bg-blue-600">
//               Know More
//             </Button>
//             <Button
//   variant="outline"
//   className="rounded-full border border-white text-white hover:bg-white hover:text-black"
//   onClick={() => window.location.href = '/approach'}
// >
//   Our Approach
// </Button>

//           </div>
//         </div>
//         <div className="relative flex items-center justify-center">
//           <div className="relative h-[400px] w-full">
//             <Image
//               src="/3d image.png"
//               alt="Digital Transformation Illustration"
//               fill
//               className="object-contain"
//               priority
//             />
//             {/* Floating app icons */}
//             <div className="absolute left-[10%] top-[20%] h-12 w-12 rounded-xl bg-blue-500 shadow-lg"></div>
//             <div className="absolute right-[20%] top-[15%] h-12 w-12 rounded-xl bg-purple-400 shadow-lg"></div>
//             <div className="absolute bottom-[30%] right-[10%] h-12 w-12 rounded-xl bg-red-500 shadow-lg"></div>
//             <div className="absolute bottom-[20%] left-[20%] h-12 w-12 rounded-xl bg-green-500 shadow-lg"></div>

//             {/* Decorative elements */}
//             <div className="absolute left-[30%] top-[10%] text-2xl text-white">+</div>
//             <div className="absolute right-[30%] bottom-[40%] text-2xl text-white">×</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center py-16"
//       style={{ backgroundImage: "url('/linedimage.png')" }}
//     >
//       <div className="container mx-auto grid gap-8 md:grid-cols-2">
//         <div className="flex flex-col justify-center space-y-6 text-white">
//           <h1 className="text-4xl  text-black font-bold leading-tight md:text-5xl">
//             Empowering Digital Transformation for Humanity
//           </h1>
//           <p className="text-lg text-black-300     text-black font-bold leading-tight ">
//             We create human-centered digital experiences that drive real impact
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Button className="rounded-full bg-blue-500 hover:bg-blue-600">
//               Know More
//             </Button>
//             <Button
//               variant="outline"
//               className="rounded-full border-white border-2 text-black hover:bg-white hover:text-black"
//               onClick={() => window.location.href = '/approach'}
//             >
//               Our Approach
//             </Button>
//           </div>
//         </div>
//         <div className="relative flex items-center justify-center">
//           <div className="relative h-[400px] w-full">
//             <Image
//               src="/3d image.png"
//               alt="Digital Transformation Illustration"
//               fill
//               className="object-contain"
//               priority
//             />
//             {/* Floating app icons */}
//             <div className="absolute left-[10%] top-[20%] h-12 w-12 rounded-xl bg-blue-500 shadow-lg"></div>
//             <div className="absolute right-[20%] top-[15%] h-12 w-12 rounded-xl bg-purple-400 shadow-lg"></div>
//             <div className="absolute bottom-[30%] right-[10%] h-12 w-12 rounded-xl bg-red-500 shadow-lg"></div>
//             <div className="absolute bottom-[20%] left-[20%] h-12 w-12 rounded-xl bg-green-500 shadow-lg"></div>

//             {/* Decorative elements */}
//             <div className="absolute left-[30%] top-[10%] text-2xl text-white">+</div>
//             <div className="absolute right-[30%] bottom-[40%] text-2xl text-white">×</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/linedimage.png')" }}
    >
      <div className="container mx-auto grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6 text-white">
          <h1 className="text-4xl text-black font-bold leading-tight md:text-5xl">
            Empowering Digital Transformation for Humanity
          </h1>
          <p className="text-lg text-black font-bold leading-tight">
            We create human-centered digital experiences that drive real impact
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-blue-500 hover:bg-blue-600">
              Know More
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white border-2 text-black hover:bg-white hover:text-black hover:font-bold"
              onClick={() => (window.location.href = "/approach")}
            >
              Our Approach
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative h-[400px] w-full">
            <Image
              src="/3d image.png"
              alt="Digital Transformation Illustration"
              fill
              className="object-contain"
              priority
            />
            {/* Floating app icons */}
            <div className="absolute left-[10%] top-[20%] h-12 w-12 rounded-xl bg-blue-500 shadow-lg"></div>
            <div className="absolute right-[20%] top-[15%] h-12 w-12 rounded-xl bg-purple-400 shadow-lg"></div>
            <div className="absolute bottom-[30%] right-[10%] h-12 w-12 rounded-xl bg-red-500 shadow-lg"></div>
            <div className="absolute bottom-[20%] left-[20%] h-12 w-12 rounded-xl bg-green-500 shadow-lg"></div>

            {/* Decorative elements */}
            <div className="absolute left-[30%] top-[10%] text-2xl text-white">
              +
            </div>
            <div className="absolute right-[30%] bottom-[40%] text-2xl text-white">
              ×
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

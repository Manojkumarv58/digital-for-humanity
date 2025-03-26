// "use client"

// import Image from "next/image";
// import { ChevronDownIcon } from "lucide-react";
// import { useState } from "react";

// const services = [
//   { name: "Digital Presence & Branding", details: "Enhancing your brand's online presence." },
//   { name: "Performance marketing & Optimization", details: "Maximizing marketing performance through data-driven strategies." },
//   { name: "Audience engagement & Growth", details: "Growing and engaging your audience effectively." },
//   { name: "Data Insights & Strategy", details: "Leveraging data for strategic business decisions." },
//   { name: "Automation", details: "Streamlining processes with advanced automation." },
//   { name: "Legal", details: "Ensuring compliance and legal security for your business." },
// ];

// export default function OurServices() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleDropdown = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto">
//         <h2 className="mb-12 text-3xl font-bold">Our Services</h2>

//         <div className="grid gap-8 md:grid-cols-2">
//           <div className="space-y-4">
//             {services.map((service, index) => (
//               <div key={index} className="rounded-md border p-4 hover:bg-gray-50">
//                 <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(index)}>
//                   <span className="font-medium">{service.name}</span>
//                   <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
//                     <ChevronDownIcon className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
//                   </div>
//                 </div>
//                 {openIndex === index && (
//                   <div className="mt-2 p-2 text-gray-600 border-t">{service.details}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="relative flex items-center justify-center">
//             <div className="relative w-96 h-96 rounded-full border border-gray-300 flex items-center justify-center">
//               <ServiceIcon src="/servicesimg/branding.png" text="Branding" position="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
//               <ServiceIcon src="/servicesimg/compliant.png" text="Marketing" position="top-1/4 right-0 translate-x-1/2" />
//               <ServiceIcon src="/servicesimg/customer.png" text="Growth" position="bottom-1/4 right-0 translate-x-1/2" />
//               <ServiceIcon src="/servicesimg/engineering (1).png" text="Data & Strategy" position="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
//               <ServiceIcon src="/servicesimg/performance (1).png" text="Automation" position="bottom-1/4 left-0 -translate-x-1/2" />
//               <ServiceIcon src="/servicesimg/performance.png" text="Legal" position="top-1/4 left-0 -translate-x-1/2" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// interface ServiceIconProps {
//   src: string;
//   text: string;
//   position: string;
// }

// const ServiceIcon: React.FC<ServiceIconProps> = ({ src, text, position }) => {
//   return (
//     <div className={`absolute ${position} flex flex-col items-center`}> 
//       <Image src={src} alt={text} width={48} height={48} className="rounded-full bg-gray-200 p-2 shadow-md" />
//     </div>
//   );
// };

"use client"

import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Digital Presence & Branding", details: "Enhancing your brand's online presence." },
  { name: "Performance marketing & Optimization", details: "Maximizing marketing performance through data-driven strategies." },
  { name: "Audience engagement & Growth", details: "Growing and engaging your audience effectively." },
  { name: "Data Insights & Strategy", details: "Leveraging data for strategic business decisions." },
  { name: "Automation", details: "Streamlining processes with advanced automation." },
  { name: "Legal", details: "Ensuring compliance and legal security for your business." },
];

export default function OurServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold">Our Services</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="rounded-md border p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleDropdown(index)}>
                  <span className="font-medium">{service.name}</span>
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                    <ChevronDownIcon className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-2 p-2 text-gray-600 border-t">{service.details}</div>
                )}
              </div>
            ))}
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96 rounded-full border border-gray-300 flex items-center justify-center">
              <ServiceIcon src="/servicesimg/branding.png" text="Branding" position="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <ServiceIcon src="/servicesimg/compliant.png" text="Marketing" position="top-1/4 right-0 translate-x-1/2" />
              <ServiceIcon src="/servicesimg/customer.png" text="Growth" position="bottom-1/4 right-0 translate-x-1/2" />
              <ServiceIcon src="/servicesimg/engineering (1).png" text="Data & Strategy" position="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
              <ServiceIcon src="/servicesimg/performance (1).png" text="Automation" position="bottom-1/4 left-0 -translate-x-1/2" />
              <ServiceIcon src="/servicesimg/performance.png" text="Legal" position="top-1/4 left-0 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceIconProps {
  src: string;
  text: string;
  position: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ src, text, position }) => {
  return (
    <div className={`absolute ${position} flex flex-col items-center`}> 
      <Image src={src} alt={text} width={64} height={64} className="rounded-full bg-gray-200 p-2 shadow-md" />
    </div>
  );
};

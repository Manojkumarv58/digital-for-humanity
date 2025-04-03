
// import { JSX } from "react";

// function NewsletterSubscription(): JSX.Element {
//   return (
//     <section className="bg-black text-white py-12 text-center px-6">
//       <h2 className="text-3xl font-bold">Stay Updated with the Latest Trends</h2>
//       <p className="mt-3 text-lg text-gray-300">
//         Subscribe to get the best insights delivered to your inbox
//       </p>
//       <div className="mt-6 flex justify-center">
//         <label htmlFor="email" className="sr-only">
//           Email Address
//         </label>
//         <div className="relative w-full max-w-md">
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-1 top-1 bottom-1 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default NewsletterSubscription;

import { JSX } from "react";
import { Mail } from "lucide-react"; // Importing email icon

function NewsletterSubscription(): JSX.Element {
  return (
    <section className="bg-black text-white py-16 px-8 text-center">
      <div className="flex justify-center mb-4">
        <Mail className="w-14 h-14 text-blue-500" /> {/* Email icon */}
      </div>
      <h2 className="text-3xl font-bold">Stay Updated with the Latest Trends</h2>
      <p className="mt-4 text-lg text-gray-300">
        Subscribe to get the best insights delivered to your inbox
      </p>
      <div className="mt-6 flex justify-center px-4">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <div className="flex w-full max-w-lg space-x-3">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-white-500 text-white px-6 py-4 rounded-full hover:bg-blue-600 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSubscription;

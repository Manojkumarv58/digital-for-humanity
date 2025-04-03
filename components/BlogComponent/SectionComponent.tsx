
// // "use client"

// // import React, { useState } from "react";
// // import LoadMoreButton from "./LoadMoreButton";
// // import Card from "./Card";
// // import { JSX } from "react/jsx-runtime";

// // type CardProps = {
// //     title: string;
// //     description: string;
// //     image?: string;
// // };

// // type SectionProps = {
// //     title: string;
// //     data: CardProps[];
// // };

// // const ITEMS_PER_LOAD = 3;

// // function Section({ title, data }: SectionProps): JSX.Element {
// //     const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
    
// //     const handleLoadMore = () => {
// //         setVisibleCount((prevCount) => Math.min(prevCount + ITEMS_PER_LOAD, data.length));
// //     };

// //     return (
// //         <section className="container mx-auto py-10">
// //             <h2 className="text-3xl font-bold text-left mb-6">{title}</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {data.slice(0, visibleCount).map((item, index) => (
// //                     <Card key={index} {...item} />
// //                 ))}
// //             </div>
// //             {visibleCount < data.length && (
// //                 <div className="flex justify-center mt-6">
// //                     <LoadMoreButton   />
// //                 </div>
// //             )}
// //         </section>
// //     );
// // }

// // export default Section;

// "use client";

// import React, { useState } from "react";
// import LoadMoreButton from "./LoadMoreButton";
// import Card from "./Card";
// import { JSX } from "react/jsx-runtime";

// type CardProps = {
//     title: string;
//     description: string;
//     image?: string;
// };

// type SectionProps = {
//     title: string;
//     data: CardProps[];
// };

// const ITEMS_PER_LOAD = 3;

// function Section({ title, data }: SectionProps): JSX.Element {
//     const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
    
//     const handleLoadMore = () => {
//         setVisibleCount((prevCount) => Math.min(prevCount + ITEMS_PER_LOAD, data.length));
//     };

//     return (
//         <section className="container mx-auto py-10">
//             <h2 className="text-3xl font-bold text-left mb-6">{title}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {data.slice(0, visibleCount).map((item, index) => (
//                     <Card key={index} {...item} />
//                 ))}
//             </div>
//             {visibleCount < data.length && (
//                 <div className="flex justify-center mt-6">
//                     <LoadMoreButton onClick={handleLoadMore} />
//                 </div>
//             )}
//         </section>
//     );
// }

// export default Section;

"use client";

import React, { useState } from "react";
import LoadMoreButton from "./LoadMoreButton";
import Card from "./Card";
import { JSX } from "react/jsx-runtime";

type CardProps = {
    title: string;
    description: string;
    image?: string;
};

type SectionProps = {
    title: string;
    data: CardProps[];
};

const ITEMS_PER_LOAD = 3;

function Section({ title, data }: SectionProps): JSX.Element {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + ITEMS_PER_LOAD, data.length));
    };

    return (
        <section className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-left mb-6">{title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.slice(0, visibleCount).map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

            {/** ✅ Show Load More Button ONLY if there are more items to load */}
            {visibleCount < data.length && data.length > ITEMS_PER_LOAD && (
                <div className="flex justify-center mt-6">
                    <LoadMoreButton onClick={handleLoadMore} />
                </div>
            )}
        </section>
    );
}

export default Section;

import { JSX } from "react";


type CardProps = {
  title: string;
  description: string;
  image?: string;
};

function Card({ title, description, image }: CardProps): JSX.Element {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center border  border-b-8 border-black">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
        Read More
      </button>
    </div>
  );
}
export default Card
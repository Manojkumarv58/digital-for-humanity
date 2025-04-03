

import React from "react";

type LoadMoreButtonProps = {
    onClick: () => void;
};

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-black text-white px-6 py-3 rounded-full w-full mt-4 mx-auto block hover:bg-gray-800"
      aria-label="Load more content"
        >
            Load More
        </button>
    );
};

export default LoadMoreButton;

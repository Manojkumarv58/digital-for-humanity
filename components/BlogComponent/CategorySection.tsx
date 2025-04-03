
"use client";
import React, { useState } from "react";
import LoadMoreButton from "./LoadMoreButton";
import Card from "./Card";
import { FaFilter } from "react-icons/fa";

type CardProps = {
    title: string;
    description: string;
    image?: string;
};

type CategoryData = {
    category: string;
    articles: CardProps[];
};

type CategorySectionProps = {
    data: CategoryData[];
};

const ITEMS_PER_LOAD = 3; // Number of items to load per click

function CategorySection({ data }: CategorySectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
        setVisibleCount(ITEMS_PER_LOAD); // Reset visible count when filter changes
    };

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + ITEMS_PER_LOAD, filteredData.length));
    };

    const filteredData =
        selectedCategory === "All"
            ? data.flatMap(cat => cat.articles)
            : data.find(cat => cat.category === selectedCategory)?.articles || [];

    return (
        <section className="container mx-auto py-10">
            {/* Header with Capsule Dropdown */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-left">Explore Categories</h2>

                <div className="relative mt-4 md:mt-0">
                    <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
                    <select
                        className="pl-10 pr-4 py-2 rounded-full bg-black text-white border border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        onChange={handleFilter}
                        value={selectedCategory}
                    >
                        <option value="All">All Categories</option>
                        {data.map(({ category }) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredData.slice(0, visibleCount).map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredData.length && (
                <div className="mt-6 flex justify-center">
                    <LoadMoreButton onClick={handleLoadMore} />
                </div>
            )}
        </section>
    );
}

export default CategorySection;


import React from "react";
import Section from "@/components/BlogComponent/SectionComponent";
import NewsletterSubscription from "@/components/BlogComponent/NewsLetter";
import CategorySection from "@/components/BlogComponent/CategorySection";
import { JSX } from "react/jsx-runtime";
import { trendingTopics,featuredArticles,categories } from "@/components/BlogComponent/BlogData";

export default function DigitalForHumanity(): JSX.Element {
  return (
    <div className="bg-gray-100 text-black">
      <Section title="Trending Topics" data={trendingTopics} />
      <Section title="Featured Articles" data={featuredArticles} />
      <CategorySection  data={categories}/>
      <NewsletterSubscription />
    </div>
  );
}


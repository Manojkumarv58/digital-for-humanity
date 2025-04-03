type CardProps = {
    title: string;
    description: string;
    image?: string;
};

const trendingTopics: CardProps[] = [
    { title: "The Future of Digital Design", description: "How digital design is evolving.", image: "/blog/1679555836235.jpeg" },
    { title: "Personalization in AI", description: "How AI is transforming UX.", image: "/blog/pexels-michelangelo-buonarroti-8728560.jpg" },
    { title: "The Future of Digital Design", description: "How digital design is evolving.", image: "/blog/pexels-michelangelo-buonarroti-8728560.jpg" },
    { title: "Personalization in AI", description: "How AI is transforming UX.", image: "/blog/d2224dc1d973685864cefe9aa9c53122.jpg" },
    { title: "Building Trust Through Minimalist Design", description: "Why less is more.", image: "/blog/1679555836235.jpeg" },
    { title: "Building Trust Through Minimalist Design", description: "Why less is more.", image: "/blog/1679555836235.jpeg" },
];

const featuredArticles: CardProps[] = [
    { title: "The Power of Personalization in Digital", description: "How personalization boosts engagement.", image: "/blog/1679555836235.jpeg" },
    { title: "How Creativity Shapes the Future of Branding", description: "The role of creativity in branding.", image: "/blog/1679555836235.jpeg" },
    { title: "The Future of Digital Design", description: "How digital design is evolving.", image: "/blog/1679555836235.jpeg" },
    { title: "Personalization in AI", description: "How AI is transforming UX.", image: "/blog/1679555836235.jpeg" },
    { title: "Building Trust Through Minimalist Design", description: "Why less is more.", image: "/blog/1679555836235.jpeg" },
    { title: "Tech Trends 2025: Blockchain & Web 3.0", description: "What’s next in technology.", image: "/blog/1679555836235.jpeg" },
];




const categories: { 
    category: string; 
    articles: { title: string; description: string; image: string }[] 
}[] = [
    {
        category: "Technology",
        articles: [
            { title: "The Future of AI in Web Development", description: "How AI is transforming web technologies.", image:  "/blog/1679555836235.jpeg" },
            { title: "Blockchain and Its Impact on Finance", description: "Understanding blockchain's role in modern finance.", image:  "/blog/1679555836235.jpeg" },
            { title: "Cybersecurity Trends in 2024", description: "Latest security measures for protecting data online.", image:  "/blog/d2224dc1d973685864cefe9aa9c53122.jpg" },
            { title: "The Rise of Quantum Computing", description: "How quantum computing will change the tech industry.", image:  "/blog/pexels-michelangelo-buonarroti-8728560.jpg" }
        ]
    },
    {
        category: "Business",
        articles: [
            { title: "Effective Marketing Strategies for Startups", description: "Growth tactics for new businesses.", image:  "/blog/1679555836235.jpeg" },
            { title: "How to Build a Scalable Business Model", description: "Key factors in scaling a business successfully.", image:  "/blog/1679555836235.jpeg" },
            { title: "Financial Planning for Entrepreneurs", description: "How to manage cash flow and investments in business.", image:  "/blog/1679555836235.jpeg" },
            { title: "The Role of Leadership in Business Success", description: "How strong leadership drives company growth.", image:  "/blog/1679555836235.jpeg" }
        ]
    },
    {
        category: "Health",
        articles: [
            { title: "The Importance of Mental Health in the Workplace", description: "How companies can support employee well-being.", image:  "/blog/1679555836235.jpeg" },
            { title: "Fitness Trends to Watch in 2024", description: "New approaches to staying fit and healthy.", image:  "/blog/1679555836235.jpeg" },
            { title: "Nutrition Essentials for a Healthy Life", description: "Key dietary habits for overall well-being.", image:  "/blog/1679555836235.jpeg" },
            { title: "How Sleep Affects Productivity", description: "The science behind sleep and its impact on daily performance.", image:  "/blog/1679555836235.jpeg" }
        ]
    }
];

export default categories;


export { trendingTopics, featuredArticles, categories };

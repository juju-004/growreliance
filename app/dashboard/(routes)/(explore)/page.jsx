"use client";

import { useEffect, useState } from "react";
import {
  NewspaperIcon,
  CalendarIcon,
  BookmarkIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

const AgricultureNewsFeed = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [bookmarked, setBookmarked] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Sample news data
  const newsItems = [
    {
      id: "1",
      title: "New Drought-Resistant Wheat Varieties Show Promise",
      excerpt:
        "Researchers report wheat strains needing 30% less water show promising results in trials...",
      date: "May 15, 2023",
      category: "research",
      source: "AgriScience Journal",
    },
    {
      id: "2",
      title: "Subsidies Announced for Organic Farming Transition",
      excerpt:
        "$50M program to help conventional farms transition to organic methods over three years...",
      date: "May 12, 2023",
      category: "policy",
      source: "National Farming Gazette",
    },
    {
      id: "3",
      title: "Precision Agriculture Adoption Grows 14% Year-over-Year",
      excerpt:
        "Survey shows 42% of mid-sized farms now use sensor technology or automated equipment...",
      date: "May 10, 2023",
      category: "technology",
      source: "AgTech Daily",
    },
  ];

  const categories = [
    { id: "all", name: "All News" },
    { id: "policy", name: "Policy" },
    { id: "research", name: "Research" },
    { id: "technology", name: "Technology" },
    { id: "crops", name: "Crops" },
  ];

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredNews = newsItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        window.innerWidth < 768 &&
        document.getElementsByClassName("scroller").length > 0
      ) {
        if (window.scrollY > 213) {
          const elems = document.getElementsByClassName("scroller");
          for (let i = 0; i < elems.length; i++)
            elems[i].classList.replace(
              "overflow-y-hidden",
              "overflow-y-scroll"
            );
        } else if (
          window.scrollY < 214 &&
          document
            .getElementsByClassName("scroller")[0]
            .classList.contains("overflow-y-scroll")
        ) {
          const elems = document.getElementsByClassName("scroller");
          for (let i = 0; i < elems.length; i++)
            elems[i].classList.replace(
              "overflow-y-scroll",
              "overflow-y-hidden"
            );
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", (e) => {});
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-full p-4">
      {/* Header */}
      <header className="mb-5">
        <p className="text-gray-600 ml-4 mt-2">
          Latest farming research and policy updates
        </p>
      </header>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input input-bordered w-full pl-10"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <FunnelIcon className="h-5 w-5 text-gray-500" />
          <select
            className="select select-bordered"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="scroller overflow-y-hidden md:overflow-y-scroll pb-12 md:pb-0 flex-1">
        {/* News Articles */}
        <div className="space-y-4">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <article
                key={item.id}
                className="card bg-white border border-gray-200 hover:shadow-md"
              >
                <div className="card-body p-4">
                  <div className="flex justify-between">
                    <span className="badge badge-outline badge-accent text-xs">
                      {item.category}
                    </span>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <BookmarkIcon
                        className={`h-5 w-5 ${
                          bookmarked[item.id]
                            ? "text-yellow-500 fill-yellow-500"
                            : ""
                        }`}
                      />
                    </button>
                  </div>

                  <h2 className="card-title mt-2 text-lg">{item.title}</h2>
                  <p className="text-gray-700 mt-1">{item.excerpt}</p>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.source}</span>
                    </div>
                    <button className="btn btn-sm btn-ghost text-green-600">
                      Read more <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No articles found matching your criteria
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Showing {filteredNews.length} articles</p>
          {filteredNews.length > 0 && (
            <button className="btn btn-ghost btn-sm mt-2">
              Load more articles
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgricultureNewsFeed;

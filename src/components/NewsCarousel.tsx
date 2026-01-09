import React, { useState } from 'react';
import { contentData } from '../data/contentData';
import { Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 3;
const IMAGE_HEIGHT = 200;
const CARD_HEIGHT = 'auto';

export function NewsCarousel() {
  const allNews = Object.values(contentData).flatMap(
    (category) => category.news
  );

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const start = page * ITEMS_PER_PAGE;
  const visibleNews = allNews.slice(start, start + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === page) return;
    setIsTransitioning(true);
    setPage(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const toggleExpanded = (id: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (!allNews.length) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Newspaper className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-blue-600 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">
              Latest News
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600">ताज़ा खबरें</p>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* CARD CONTAINER with Smooth Transitions */}
        <div
          className="overflow-hidden"
          style={{ minHeight: 300 }}
        >
          <div
            key={page}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6
                       animate-in fade-in slide-in-from-right-10
                       duration-500"
          >
            {visibleNews.map((item, index) => {
              const isExpanded = expandedCards.has(item.id);
              
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* IMAGE with Hover Effect */}
                  <div
                    className="w-full bg-gray-200 overflow-hidden relative group"
                    style={{ height: IMAGE_HEIGHT }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover 
                                 group-hover:scale-110 
                                 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                                    opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 line-clamp-2">
                      {item.title}
                    </h4>

                    <p className={`text-sm text-gray-600 mb-3 sm:mb-4 ${
                      isExpanded ? '' : 'line-clamp-3'
                    }`}>
                      {isExpanded ? item.content : item.summary}
                    </p>

                    <div className="flex justify-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(item.id);
                        }}
                        className="bg-gradient-to-r from-blue-600 to-blue-700
                                   hover:from-blue-700 hover:to-blue-800
                                   text-white font-semibold
                                   px-5 sm:px-6 py-2 rounded-md text-xs sm:text-sm 
                                   shadow-md hover:shadow-lg
                                   active:scale-95
                                   transition-all duration-200"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ANIMATED DOT INDICATORS */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12" role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              disabled={isTransitioning}
              role="tab"
              aria-selected={i === page}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ease-out
                         disabled:cursor-not-allowed
                         ${i === page 
                           ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-blue-600 to-blue-700 shadow-md' 
                           : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                         }`}
            />
          ))}
        </div>

        {/* NAVIGATION BUTTONS BELOW DOTS */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            aria-label="Previous page"
            className="w-12 h-12 rounded-full bg-white shadow-lg
                       flex items-center justify-center
                       border-2 border-gray-200
                       hover:border-blue-500 hover:bg-blue-50
                       active:scale-95
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 ease-out"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" strokeWidth={2.5} />
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            aria-label="Next page"
            className="w-12 h-12 rounded-full bg-white shadow-lg
                       flex items-center justify-center
                       border-2 border-gray-200
                       hover:border-blue-500 hover:bg-blue-50
                       active:scale-95
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 ease-out"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}

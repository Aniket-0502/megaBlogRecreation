import React, { useState, useEffect } from "react";
import HomePagePostCard from "./HomePagePostCard";

function SlidingPosts({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, posts.length]);

  const slideNext = () => {
    const newIndex = (currentIndex + 1) % posts.length;
    setCurrentIndex(newIndex);
  };

  const postComponents = posts.map((post, index) => (
    <div key={index} className="flex-shrink-0 p-4">
      <HomePagePostCard {...post} />
    </div>
  ));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {postComponents}
      </div>
    </div>
  );
}

export default SlidingPosts;

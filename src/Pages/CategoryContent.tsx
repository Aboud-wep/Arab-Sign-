// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContentContext } from "../Context/ContentContext";

const CategoryContent = () => {
  const { search } = useLocation(); // Get the query string
  const { contents, isLoading, error } = useContext(ContentContext);
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [categoryName, setCategoryName] = useState("Category");

  useEffect(() => {
    // Parse the query parameters
    const queryParams = new URLSearchParams(search);
    const categoryParam = queryParams.get("category");

    // Decode and parse the category IDs
    const categoryIds = JSON.parse(decodeURIComponent(categoryParam || "[]"));

    if (contents && categoryIds.length > 0) {
      // Check if the response format matches the provided structure
      const videosData =
        Array.isArray(contents?.data?.data) ? contents.data.data : contents;

      // Filter videos by category ID
      const filteredVideos = videosData.filter((video) =>
        categoryIds.includes(video.category_id)
      );
      setCategoryVideos(filteredVideos);

      // Get the category name from the first matching video
      if (filteredVideos.length > 0) {
        setCategoryName(filteredVideos[0]?.category?.name || "Category");
      } else {
        setCategoryName("No Videos Found");
      }
    }
  }, [search, contents]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoryVideos.length > 0 ? (
          categoryVideos.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-medium">{video.title}</p>
            </div>
          ))
        ) : (
          <p>No videos found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryContent;

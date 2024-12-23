// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentContext } from "../Context/ContentContext";
import { LeftOutlined } from "@ant-design/icons";

const Content = () => {
  const { contents, categories, isLoading, error } = useContext(ContentContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (contents) {
      setVideos(contents.slice(0, 4)); // Show the first 4 videos
    }
  }, [contents]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col gap-8">
      {/* Videos Section */}
      <div className="flex gap-4 relative">
        {videos.map((video) => (
          <div key={video.id}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-[409px] h-[233px] rounded-2xl"
            />
          </div>
        ))}
        <div className="text-[#0153A5] bg-white rounded-full w-[67px] h-[67px] absolute text-4xl flex items-center justify-center left-[30px] top-[85px]">
          <Link to={"/content/latest-videos"}>
            <LeftOutlined />
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-4 flex gap-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/content/category?category=${encodeURIComponent(
              JSON.stringify([category.id])
            )}`}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;

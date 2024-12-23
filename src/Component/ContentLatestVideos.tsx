
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const ContentLatestVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/content?page=${currentPage}`
        );
        const data = response.data.data.contents;
        setVideos(data.data);
        setTotalPages(data.last_page);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Videos</h1>
      <div className="grid grid-cols-4 gap-4">
        {videos.map((video) => (
          <Link
            to={`/content/latest-videos/${video.id}`}
            key={video.id}
            className="bg-white p-2 shadow rounded"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-[200px] object-cover rounded"
            />
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p>{video.body}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index + 1}
            to={`/content/latest-videos?page=${index + 1}`}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentLatestVideos;



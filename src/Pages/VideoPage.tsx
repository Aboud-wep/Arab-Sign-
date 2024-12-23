// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { InstagramEmbed } from "react-social-media-embed";

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/content/${id}`
        );
        const videoData = response.data.data.content;
        const relatedContents = response.data.data.relatedContents;

        setVideo(videoData);
        setRelatedVideos(relatedContents);
      } catch (err) {
        setError(err.message || "Error fetching video data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  const handleNavigation = (newId) => {
    navigate(`/content/latest-videos/${newId}`);
  };

  const renderVideoPlayer = () => {
    if (!video) return null;

    const url = video.resource.path;

    if (ReactPlayer.canPlay(url)) {
      return <ReactPlayer url={url} />;
    } else if (url.includes("instagram.com")) {
      return <InstagramEmbed url={url} />;
    } else {
      return <p>Unsupported video type. Please try a different video.</p>;
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex">
      <div>
        <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
        <div className="mb-4">{renderVideoPlayer()}</div>
        <p className="mb-4">{video.body}</p>
      </div>

      <div className="ml-0">
        <h2 className="text-xl font-semibold mb-2">Related Videos</h2>
        <div className="">
          {relatedVideos.map((relatedContent) => (
            <div
              key={relatedContent.id}
              className="border rounded p-2 hover:shadow-md cursor-pointer flex"
              onClick={() => handleNavigation(relatedContent.id)}
            >
              <img
                src={relatedContent.thumbnail}
                alt={relatedContent.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="font-medium mr-4 justify-center items-center flex w-[150px]">{relatedContent.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;

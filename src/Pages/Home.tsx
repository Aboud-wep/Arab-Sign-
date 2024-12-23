//  @ts-nocheck
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS


const Home = ({ className = "", children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/home");
        const result = await response.json();
        if (result.status && result.data) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className={`relative w-full h-[850px] bg-center bg-cover bg-no-repeat overflow-hidden ${className} bg-[url('./src/assets/Images/About_Us_image.png')]`}
      >
        <img
          src="./src/assets/Images/AboutUsColor.png"
          alt="Overlay"
          className="absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay"
        />

        <div className="mr-[381px] mt-[254px] relative z-10">
          <Link
            to="/AboutUs"
            className="bg-gray-600 px-[38px] pt-[15px] pb-[13px] text-white text-[40px] rounded-full"
          >
            من نحن
          </Link>
        </div>

        
      </div>

      {/* <div className="relative z-10 mt-8 p-4 mx-auto w-[90%] max-w-3xl">
        {data.length > 0 ? (
          <Carousel className="rounded-xl">
            {data.map((item) => (
              <div key={item.id} className="relative w-full h-[400px]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg text-white">
                  <h2 className="text-2xl font-bold mb-1">{item.title}</h2>
                  <p className="text-sm">{item.body}</p>
                  <p className="text-xs mt-1">
                    Views: {item.views} | Published:{" "}
                    {new Date(item.published_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-700">Loading content...</p>
        )}
      </div> */}
    </div>
  );
};

export default Home;

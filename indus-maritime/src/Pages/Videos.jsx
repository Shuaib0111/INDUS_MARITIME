import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Contact from "../Components/Contact";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/xcDPDqkPgcY",
    title: "What is Warehouse Management?",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/B2SlQTcTibs",
    title: "Freight Forwarding Process | Roles",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/f4hkqGxMA3Q",
    title: "Supply Chain, Logistics & Shipping",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/j9zAtThsESY",
    title: "Logistics & Warehouse Basics",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/your_video_id_here",
    title: "AD Code Registration Guide",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/your_video_id_here",
    title: "International Trade Consultancy Insights",
  },
];

const Videos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (id) => {
    setPlayingVideo(id);
  };

  return (
    <div className="w-full text-black min-h-screen">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-6 md:py-16 lg:py-16 xl:py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Video Showcase</h2>
        <p className="my-4 text-lg text-gray-700">
          Explore key insights into logistics, supply chain, and international trade.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {playingVideo === video.id ? (
                <iframe
                  className="w-full h-56"
                  src={`${video.src}?autoplay=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="w-full h-56 bg-black flex items-center justify-center cursor-pointer relative transition-opacity duration-300 group-hover:opacity-80"
                  onClick={() => handlePlay(video.id)}
                >
                  <FaPlay className="text-white text-5xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                </div>
              )}

              <div className="p-4 bg-gray-200 text-center transition-all duration-300 group-hover:bg-gray-300">
                <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
          <Contact />
    </div>
  );
};

export default Videos;


const VideoTitle = ({ title, description }) => {

  const handleSubscribePopup = () => {
    alert("Please purchase the subscription to continue 🎬");
  };

  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="py-6 text-lg w-1/4">
        {description.slice(0, 180)}.
      </p>

      <div className="flex gap-3">
        <button
          onClick={handleSubscribePopup}
          className="px-8 py-2 bg-white text-black text-lg rounded-md hover:bg-opacity-80 transition"
        >
          ▶️ Play
        </button>

        <button
          onClick={handleSubscribePopup}
          className="px-8 py-2 bg-white text-black text-lg rounded-md hover:bg-opacity-80 transition"
        >
          More Info
        </button>
      </div>

    </div>
  );
};

export default VideoTitle;

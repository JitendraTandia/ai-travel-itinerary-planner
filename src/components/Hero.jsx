import React from "react";

function Hero() {
  return (
    <div className="px-24 flex flex-col items-center " >
        <div className="mt-48 flex flex-col items-center">
        <h1 className="text-6xl font-semibold max-w-[1000px] text-center">
          Plan Group Tours Effortlessly: Your Ultimate Itinerary Companion
        </h1>
      
        <p className="py-9 max-w-[800px] text-center text-gray-800">
          Streamline your group travel planning with expert destination
          insights, real-time collaboration, and integrated booking for hotels,
          transport, and activities—all in one place.
        </p>
     
        <button className="px-5 py-3 bg-black text-white rounded-lg">Add a Trip</button>
        </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Logo({ white = false }) {
  const reqWhite = white;

  return (
    <div className="flex items-center">
      <div className="m-2">
        <img
          className="h-12 w-12"
          src="https://res.cloudinary.com/dhkl5zhml/image/upload/v1719833714/android-chrome-512x512_phhbo7.png"
          alt="Logo"
        />
      </div>
      <div>
        <p
          className={`font-playwriteIt text-[24px] ${
            reqWhite ? "text-white" : "text-black"
          }`}
        >
          BlogVerse
        </p>
      </div>
    </div>
  );
}

export default Logo;

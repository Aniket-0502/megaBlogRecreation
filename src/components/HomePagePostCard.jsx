import React from "react";
import appwriteService from "../appwrite/config";
import { useNavigate } from "react-router-dom";

function HomePagePostCard({ $id, title, featuredImage }) {
  const navigate = useNavigate();
  return (
    <div className="h-[248px] w-[300px] rounded-3xl p-4 flex justify-around bg-white items-center m-5">
      <div className="m-2 p-1 grid place-content-center">
        <img
          className="h-[100px] w-[250px] rounded-2xl object-center"
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
        />
      </div>
      <div className="h-[115px] w-[150px]">
        <div className="grid place-content-center m-4">
          <div className="font-semibold text-xl m-2 text-left">{title}</div>
          <div className="flex justify-center items-center mt-[15px]">
            <button onClick={() => navigate(`/post/${$id}`)}>
              <div className="rounded-full text-sm bg-orange-500 p-3 text-center">
                Read More
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePagePostCard;

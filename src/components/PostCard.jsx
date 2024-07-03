import React, { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, $createdAt, title, featuredImage }) {
  const date = new Date($createdAt);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  // Format the date as DD-MM-YYYY
  const formattedDate = `${day}-${month}-${year}`;
  return (
    <Link to={`/post/${$id}`}>
      {/* <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div> */}

      <div className="h-[134px] w-[525px] rounded-3xl p-4 flex justify-around bg-white">
        <div className="m-2 p-1 grid place-content-center">
          <img
            className="h-[111px] w-[120px] rounded-2xl object-center"
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
          />
        </div>
        <div className="h-[115px] w-[340px]">
          <div className="flex flex-col justify-around items-center m-4">
            <div className="font-semibold text-xl m-4 text-left">{title}</div>
            <div className="mr-15 text-sm">Posted On : {formattedDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;

import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  console.log(posts);

  return (
    <div className="w-full py-8 bg-gray-100">
      <Container>
        <div className="flex">
          <div className="ml-0 pl-0">
            <img
              src="https://res.cloudinary.com/dhkl5zhml/image/upload/v1719976198/Group_1000002597_ikmdvc.png"
              alt="design"
            />
          </div>
          <div className="m-auto">
            <div className="text-left text-[43px] font-bold gradient-text font-playwriteDeGrund">
              For You
            </div>
            <div className="flex flex-col items-center justify-center">
              {posts.map((post) => (
                <div
                  key={post.$id}
                  className="p-2 w-1/4 flex flex-col items-center justify-center"
                >
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
          <div className="mr-0 pr-0">
            <img
              src="https://res.cloudinary.com/dhkl5zhml/image/upload/v1719976198/Group_1000002876_glwiwe.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;

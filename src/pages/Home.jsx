import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import SlidingPosts from "../components/SlidingPosts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomePagePostCard from "../components/HomePagePostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents.reverse());
      }
    });
  }, []);

  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg",
    "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg",
  ];
  const intervalTime = 3000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [inputVal, setInputVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputVal("");
  };

  if (!isLoggedIn) {
    return (
      <div className="w-full">
        <Container>
          <div>
            <div className="py-8 m-6 mb-[70px] flex flex-wrap justify-center items-center">
              <div>
                <img
                  className="hidden md:block h-[436px] w-[655px] rounded-full shadow-slate-400"
                  src="https://images.pexels.com/photos/8367812/pexels-photo-8367812.jpeg"
                  alt="Start Writing Today"
                />
                <img
                  className="md:hidden h-[256px] w-[256px] rounded-full shadow-slate-400 object-fill"
                  src="https://images.pexels.com/photos/8367812/pexels-photo-8367812.jpeg"
                  alt="Start Writing Today"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-center text-[35px] lg:text-right lg:text-[70px]">
                  Write Your
                </div>
                <div className="text-center text-[35px] lg:text-right lg:text-[70px] font-bold gradient-text">
                  Article
                </div>
                <div className="text-center text-[35px] lg:text-right lg:text-[70px]">
                  here
                </div>
                <div className="grid place-content-center lg:place-content-end mt-[20px]">
                  <button onClick={() => navigate("/signup")}>
                    <div className="bg-red-500 rounded-full text-center p-3 w-[180px] text-white">
                      Create Account
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-red-500 mt-4 flex flex-wrap justify-evenly items-end lg:items-center w-full h-[550px] relative overflow-hidden">
              <div className="font-semibold mx-7 z-20">
                <h2 className="text-3xl text-white font-playwriteDeGrund my-5 text-center">
                  Hang onto your memories
                </h2>
                <p className="text-white text-center w-[300px] font-playwriteDeGrund">
                  Save the moments that matter, BlogVerse helps you store
                  thousands of posts and photos
                </p>
              </div>
              <div className="relative z-10 flex items-center">
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:relative">
                  <img
                    className="h-[243px] w-[320px] rotate-12 z-20"
                    src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg"
                    alt="first"
                  />
                  <img
                    className="h-[243px] w-[335px] rotate-[-20deg] z-10"
                    src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
                    alt="second"
                  />
                  <img
                    className="h-[243px] w-[295px] rotate-[18deg] z-0"
                    src="https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg"
                    alt="third"
                  />
                </div>
                <div className="lg:hidden carousel overflow-hidden relative w-full h-[100%]">
                  <div
                    className="carousel-inner flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {images.map((image, i) => (
                      <div
                        className="carousel-item w-full flex-shrink-0 mt-4"
                        key={i}
                      >
                        <img
                          src={image}
                          alt={`Image ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="text-white absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent hover:bg-red-500 px-4 py-2 rounded-full"
                    onClick={prevSlide}
                  >
                    &larr;
                  </button>
                  <button
                    className="text-white absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent hover:bg-red-500 px-4 py-2 rounded-full"
                    onClick={nextSlide}
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
            <div className="px-7 mt-4 w-full h-[450px] grid place-content-center text-red-600">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-4xl text-center font-playwriteDeGrund m-4">
                  Join Millions of Others
                </h2>
                <p className="text-xl text-center w-[250px] font-playwriteDeGrund m-4">
                  Join BlogVerse to share your unique voice, connect with a
                  vibrant community of bloggers, discover endless inspiration,
                  and stay updated with the latest trends and stories!
                </p>
                <div className="text-center m-4 rounded-full bg-orange-600 py-4 px-5">
                  <button onClick={() => navigate("/signup")}>
                    <div className="text-white">Join Today!</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Container>
        <div>
          <div className="py-8 m-6 mb-[70px] flex flex-wrap justify-center items-center">
            <div>
              <img
                className="hidden md:block h-[436px] w-[655px] rounded-full shadow-slate-400"
                src="https://images.pexels.com/photos/8367812/pexels-photo-8367812.jpeg"
                alt="Start Writing Today"
              />
              <img
                className="md:hidden h-[256px] w-[256px] rounded-full shadow-slate-400 object-fill"
                src="https://images.pexels.com/photos/8367812/pexels-photo-8367812.jpeg"
                alt="Start Writing Today"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-center text-[35px] lg:text-right lg:text-[70px]">
                Write Your
              </div>
              <div className="text-center text-[35px] lg:text-right lg:text-[70px] font-bold gradient-text">
                Article
              </div>
              <div className="text-center text-[35px] lg:text-right lg:text-[70px]">
                here
              </div>
              <div className="grid place-content-center lg:place-content-end mt-[20px]">
                <button onClick={() => navigate("/add-post")}>
                  <div className="bg-red-500 font-playwriteDeGrund rounded-full text-center p-3 w-[140px] text-white">
                    Add Post
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-[80vh] bg-cover bg-center bg-[url('https://res.cloudinary.com/dhkl5zhml/image/upload/v1719978497/3_q1baly.png')] flex justify-evenly items-center">
            <div className="flex flex-col ml-[195px] justify-center mr-5">
              <div className="font-semibold text-[90px]">
                <div>Latest</div>
                <div className="text-white">Articles</div>
                <div>Here</div>
              </div>
              <div className="ml-8">
                <button onClick={() => navigate("/all-posts")}>
                  <div className="bg-white p-4 shadow-md text-center text-orange-500 rounded-full hover:bg-orange-600 hover:text-white">
                    See All Articles
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div className="flex">
                <HomePagePostCard {...posts[0]} />
                <HomePagePostCard {...posts[1]} />
              </div>
            </div>
          </div>
          <div className="p-10 bg-gray-100 flex justify-center items-center">
            <div className="flex bg-white rounded-2xl w-[67vw] mx-4">
              <div className="w-[35%]">
                <img
                  className="h-[60vh] rounded-2xl"
                  src="https://res.cloudinary.com/dhkl5zhml/image/upload/v1719976199/Group_1000002134_ulmxjp.png"
                  alt="design"
                />
              </div>
              <div className="grid place-content-center">
                <div className="font-bold text-[48px]">Subscribe</div>
                <div className="text-gray-500 text-base w-[295px]">
                  Subscribe to our newsletter and get upto 40% off on exclusive
                  services
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="p-2 bg-gradient-to-b from-orange-600 to-orange-400 flex mt-10 justify-between rounded-3xl"
                >
                  <input
                    className="rounded-3xl p-2 mr-2"
                    type="text"
                    placeholder="Enter Email Address"
                    value={inputVal}
                    onInput={(e) => setInputVal(e.target.value)}
                  />
                  <div>
                    <button type="submit">
                      <div className="bg-orange-600 text-white rounded-3xl p-3 font-playwriteDeGrund text-sm hover:bg-orange-400">
                        SUBSCRIBE
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;

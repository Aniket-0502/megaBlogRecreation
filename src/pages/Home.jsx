import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components/index'
import { useSelector } from 'react-redux';
import { Query } from 'appwrite';
import conf from '../conf/conf';

function Home() {
    console.log(conf.appwriteDatabaseId)
    console.log(conf.appwriteBucketId)
    console.log(conf.appwriteCollectionId)
    const [posts, setPosts] = useState([])
    const userStatus = useSelector((state)=>state.auth.status)
    let userIdfromStore = String(useSelector((state)=>state.auth.userData?.$id))
    useEffect(() => {
        // Only user's posts are visible on Home Page
        if (userIdfromStore) {
            appwriteService.getPosts([
                Query.equal("status", ["active"]),
                Query.equal("userId", [userIdfromStore])
            ]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        }
    }, []);
    
    
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {userStatus ? "Create Posts to see" : "Login to read post"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
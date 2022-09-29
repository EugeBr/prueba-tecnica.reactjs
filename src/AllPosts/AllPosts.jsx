import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AllPosts.css"

function AllPosts() {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className='all-posts'>
            {
                posts?.map((post) => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
};
export default AllPosts;
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CommentTable } from './SelectWithList';

function PostPage() {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(({ data }) => setPost(data))
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                <div className="col-10">
                    <CommentTable postId={post.id}/>
                </div>
            </div>
        </div>
    )
}

export default PostPage

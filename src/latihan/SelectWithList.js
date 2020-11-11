import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';

function SelectWithList() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    return (
        <div>
            <Select
                options={posts}
                getOptionLabel={(post) => post.title}
                getOptionValue={post => post.id}
                value={selectedPost}
                onChange={(post) => setSelectedPost(post)}
            />
            {selectedPost !== null ?
                <div className="mt-4"><CommentTable postId={selectedPost.id} /></div>
                :
                <h1>Please select post first.</h1>
            }
        </div>
    )
}

export function CommentTable({ postId }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                setComments(response.data);
            }).finally(() => setLoading(false));
    }, [postId]);

    return (<table className="table table-border table-sm text-sm small">
        <tbody>
            {loading ?
                <tr><td className="text-center">Loading...</td></tr>
                :
                comments.map(comment => (
                    <tr key={comment.id}>
                        <td>{comment.name} <small>({comment.email})</small></td>
                        <td>{comment.body}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>);
}

export default SelectWithList

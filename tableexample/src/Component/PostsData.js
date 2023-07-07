import React,{useState,useEffect} from 'react';

const PostsData = () => {
    const[posts, setPosts]=useState([]);
    const fetchData=async()=>{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await response.json();
        setPosts(data);

    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
   <table>
    <thead>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
    </thead>
    <tbody>
        {posts.map((post)=>(
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        ))}
       
    </tbody>
   </table>
  )
}

export default PostsData
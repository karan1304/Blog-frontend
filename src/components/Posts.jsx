import React,{useState,useEffect} from 'react'
import Post from './Post'




export default function Posts() {
  const [post , setPost] = useState([]);
  useEffect(()=>
    {
      fetch('https://mern-blog-api-app.onrender.com/post').then(response=>
      {
        response.json().then(posts=>
        {
          setPost(posts);
        })
      })
    },[])
  return (
    <>
       {/* <Post/>
       <Post/>
       <Post/> */}
       {post.length>0 ? post.map((post)=>(<Post {...post} key={post._id}/>)) : <div style={{textAlign:'center', marginTop:"100px"}}>There are no posts available</div>}
    </>
  )
}

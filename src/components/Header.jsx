import React, {useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContextAPI } from '../userContext';

export default function Header() {
 const {userInfo , setUserInfo}= useContext(UserContextAPI);

  useEffect(()=>
  {
  
    fetch('http://localhost:8000/profile',{credentials:'include'})
    .then(response =>
    {
      response.json()
      .then(userInfo =>
      {
          setUserInfo(userInfo);
  
      })
    })
  },[]);

  const logout = ()=>
  {
    fetch('https://mern-blog-api-app.onrender.com/logout',{credentials:'include',method:'POST'});
    setUserInfo(null);
   
  }
  
  const username = userInfo?.username
  
  return (
    <header>
          <Link to="/" className="logo">
            myBlog
          </Link>
          <nav>
            {
              username &&
              (<> 
                <Link to="/create">Create New Post</Link>
                <a onClick={logout}>Logout</a>
              </>)
            }
            {
              !username && 
              (<>
                  <Link to="/login">login</Link>
                  <Link to="/register">Register</Link>
              </>)
            }
           
          </nav>
        </header>
  )
}

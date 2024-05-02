import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContextAPI } from '../userContext';

export default function Login() {
  const [username ,setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [redirect , setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContextAPI);
  const login = async(e)=>
  {
      e.preventDefault();
      const response = await fetch('https://mern-blog-api-app.onrender.com/login',{method:'POST',body:JSON.stringify({username , password}),headers:{'Content-type':'application/json'},credentials:'include'});
      if(response.ok)
      {
        response.json().then(userInfo =>
        {
          setUserInfo(userInfo);
          setRedirect(true); 
        })
     
      }
      else
      {
        alert('Wrong credentials');
      }
  }

    if(redirect)
    {
      return <Navigate to='/'/>
    }
  return (
    <>
    <form action="" className='login'  onSubmit={login}>
      <h1>Login</h1>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input  type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button>Login</button>
    </form>
    </>
  )
}

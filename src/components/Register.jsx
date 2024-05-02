import React, { useState } from 'react'

export default function Register() {
  const [username , setUserName] = useState('')
  const [password , setPassword] = useState('');
  const [email , setEmail] = useState('');
  const [redirect , setRedirect] = useState(false);

  const register = async (e)=>
  {
    console.log("in register")
    e.preventDefault();
    const response = await fetch('https://mern-blog-api-app.onrender.com/register',{
      method:'post',
      body:JSON.stringify({username,password,email}),
      headers:{'Content-type':'application/json'},
      
    });
    
    if(response.status === 200)
    {
      alert("Register Successful");
      setRedirect(true);
    }
    else
    {
      alert("Register Failed");
    }
    
    if(redirect)
      return <Navigate to={'/'}/>
  }
  return (
    <>
    <form action="" className='register' onSubmit={register}> 
      <h1>Register</h1>
      <input type="text" placeholder='Username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input  type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button >Register</button>

    </form>
    </>
  )
}

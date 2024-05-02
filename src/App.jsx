import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post'
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Posts from './components/Posts'
import Login from './components/Login'
import Register from './components/Register'
import { UserContextProvider } from './userContext'
import CreatePost from './components/CreatePost'
import PostPage from './components/PostPage'
import EditPost from './components/EditPost'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>

    <UserContextProvider>

      <main>
        <Header/>
        <Routes>
          <Route index element={<Posts/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path="/edit/:id" element={<EditPost/>}/>
        </Routes>
      </main>

      </UserContextProvider>


    
    </>
  )
}

export default App

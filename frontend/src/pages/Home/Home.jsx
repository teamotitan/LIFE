import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Announcements from '../../components/Announcements/Announcements'
import TaskList from '../../components/TasksList/TaskList'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header/>
      <Announcements />
      <TaskList />
      <Footer />
    </div>
  )
}

export default Home

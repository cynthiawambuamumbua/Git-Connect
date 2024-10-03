import React from 'react'
import Posts from '../pages/posts'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  )
}

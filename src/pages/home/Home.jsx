import React from 'react'
import Banner from './Banner'
import PostCard from '../blogs/PostCard'
import Category from './Category'

const Home = () => {
  return (
    <main className="mt-10">
      {/* ----- Banner ----- */}
      <Banner />
      
      {/* ----- Boddy ----- */}
      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* post cards */}
        <PostCard />

        {/* right sidebar */}
        <Category />

      </div>
    </main>
  )
}

export default Home
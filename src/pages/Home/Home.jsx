import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

const Home = ({menu , nextPageToken , setNextPageToken}) => {
  const [category , setCategory] = useState(0)

  return (
    <div className='w-full flex gap-3'>
      <Sidebar menu = {menu} category={category} setCategory={setCategory} />

      <div className={`${menu ? "md:ml-50" : "md:ml-20"}  mt-2`}>
        <Main category={category} setNextPageToken={setNextPageToken} nextPageToken={nextPageToken}/>
      </div>
    </div>
  )
}

export default Home
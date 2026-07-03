import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

const Home = ({menu}) => {
  const [category , setCategory] = useState(0)
  return (
    <div className='w-full flex gap-3'>
      <Sidebar menu = {menu} category={category} setCategory={setCategory}/>
      
      <div className={`${menu ? "ml-50" : "ml-20"} mt-2`}>
        <Main category={category}/>
      </div>
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import jack from '../assets/jack.png'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../data'
import moment from 'moment'



// const suggestVideos = [
//   {
//     id: 1,
//     img: "https://picsum.photos/300/180?random=1",
//     name: "CodeWithHarry",
//     title: "Learn React JS in One Video | Complete Beginner Tutorial"
//   },
//   {
//     id: 2,
//     img: "https://picsum.photos/300/180?random=2",
//     name: "Traversy Media",
//     title: "Build a Full Stack MERN Application Step by Step"
//   },
//   {
//     id: 3,
//     img: "https://picsum.photos/300/180?random=3",
//     name: "Programming with Mosh",
//     title: "JavaScript Crash Course for Beginners"
//   },
//   {
//     id: 4,
//     img: "https://picsum.photos/300/180?random=4",
//     name: "freeCodeCamp.org",
//     title: "Node.js and Express Full Course"
//   },
//   {
//     id: 5,
//     img: "https://picsum.photos/300/180?random=5",
//     name: "The Net Ninja",
//     title: "Tailwind CSS Complete Tutorial"
//   },
//   {
//     id: 6,
//     img: "https://picsum.photos/300/180?random=6",
//     name: "Academind",
//     title: "MongoDB for Beginners | Database Tutorial"
//   },
//   {
//     id: 7,
//     img: "https://picsum.photos/300/180?random=7",
//     name: "Web Dev Simplified",
//     title: "React Router DOM v7 Explained"
//   },
//   {
//     id: 8,
//     img: "https://picsum.photos/300/180?random=8",
//     name: "Kevin Powell",
//     title: "Master CSS Flexbox and Grid Layout"
//   },
//   {
//     id: 9,
//     img: "https://picsum.photos/300/180?random=9",
//     name: "JavaScript Mastery",
//     title: "Build a Modern YouTube Clone with React"
//   },
//   {
//     id: 10,
//     img: "https://picsum.photos/300/180?random=10",
//     name: "Tech With Tim",
//     title: "Python for Beginners | Full Course"
//   }
// ];




const VideoRight = ({categoryId}) => {
  const [apiData , setApiData] = useState([])

  const fetchData = async ()=>{
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&videoCategoryId=${categoryId}&key=${API_KEY}` 
    await fetch(relatedVideo_url).then(response => response.json()).then(data => setApiData(data.items))
  }

  useEffect(()=>{
    if(categoryId){
      fetchData();
    } 
  },[categoryId])

  return (
    <div className='w-full px-3 md:mt-9 mt-1 py-2'>
        {apiData.map((item,index)=>(
        <Link key={index} to={`/video/${item.snippet.categoryId}/${item.id}`}>
          <div className='pl-1 hover:bg-slate-200 bg-gray-200 cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 px-2 rounded-md duration-300'>
            <img src={item.snippet.thumbnails.medium.url} className='rounded-md w-full' />
            <div>
                <h4 className='font-semibold text-sm line-clamp-2'>{item.snippet.title}</h4>
                <p className='text-[12px]'>{item.snippet.channelTitle}</p>
                <p className='text-[12px]'>{value_converter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}</p>
            </div>
          </div>
        </Link>
        ))}
    </div>
  )
}

export default VideoRight
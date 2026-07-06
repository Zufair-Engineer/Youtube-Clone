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
          <div className='pl-1 hover:bg-slate-200 bg-gray-100 md:bg-gray-50 cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 px-2 rounded-md duration-300'>
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
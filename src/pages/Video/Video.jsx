import React from 'react'
import VideoLeft from '../../components/VideoLeft'
import VideoRight from '../../components/VideoRight'
import { Link, Route, useParams } from 'react-router-dom'


const Video = () => {
  const {videoId , categoryId} = useParams()
  return (
    <div className='grid md:grid-cols-[63%_auto]'>
      <VideoLeft videoId={videoId}/>
      {(categoryId) ? <VideoRight categoryId={categoryId}/> : <VideoRight videoId={videoId} />}
    </div>
  )
}

export default Video
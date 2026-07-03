import React from 'react'
import VideoLeft from '../../components/VideoLeft'
import VideoRight from '../../components/VideoRight'
import { Link, Route, useParams } from 'react-router-dom'


const Video = () => {
  const {videoId , categoryId} = useParams()
  return (
    <div className='flex px-12'>
      <VideoLeft videoId={videoId}/>
      {(categoryId) ? <VideoRight categoryId={categoryId}/> : <VideoRight videoId={videoId} />}
    </div>
  )
}

export default Video
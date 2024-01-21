import React, {useEffect, useState} from 'react'
import { Youtube_Api } from '../utils/constants.js';
import VideoCard from './VideoCard.js';

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos(); 
  },[]);

  const getVideos= async () => {
    const data = await fetch(Youtube_Api);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  }
  return (
    <div className='flex flex-wrap'>
    {/* <VideoCard info={videos[0]}/> */}
     {videos.map(video => <VideoCard key={video.id} info={video} />)}
    </div>
  )
}

export default VideoContainer

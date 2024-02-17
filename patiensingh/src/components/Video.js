import React from 'react'
import video from '../assets/video.mp4'
const Video = () => {
  return (
    <div>
<video className="w-full aspect-video" autoPlay muted loop controls={false} src={video} allow="autoplay; fullscreen; encrypted-media"></video>
    </div>
  )
}

export default Video

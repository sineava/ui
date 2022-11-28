import { useEffect, useRef, useState } from 'react'
import DPlayer from 'dplayer'

export default function() {
  const [url, setUrl] = useState('https://yun.ssdm.cc/SBDM/TheDailyLifeoftheImmotalKing301.m3u8')
  const dplayerRef: any = useRef()
  useEffect(() => {
    new DPlayer({
      container: dplayerRef.current,
      video: {
        url,
        type: 'hls',
      },
      preload: 'auto',
      autoplay: true
    })
  })
  return (
    <div>
      <div className="w-[800px]" ref={dplayerRef}></div>
    </div>
  )
}
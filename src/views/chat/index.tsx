import { useEffect, useState, useRef } from 'react'
import { users } from '../../utils/user'

const Message = ({ info, user }: { info:any, user: any }) => {
  if (info.type === 0) {
    return <div className="text-center my-1 text-xs font-bold dark:text-white">用户<div className="badge badge-primary mx-1 badge-xs">{info.payload}</div>退出聊天室</div>
  }
  if (info.type === 1) {
    return <div className="text-center my-1 text-xs font-bold dark:text-white">用户<div className="badge badge-primary mx-1 badge-xs">{info.payload}</div>进入聊天室</div>
  }
  if (info.type === 2) {
    const { msg, username, time, avatar, nickname } = info.payload
    return (
      <div className={`chat px-2 ${username === user.username ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full cursor-pointer">
            <img src={avatar} />
          </div>
        </div>
        <div className="chat-header">
          <span className="dark:text-white text-xs">{nickname}</span>
          <time className="text-xs opacity-80 dark:text-white ml-1">{time}</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">{msg}</div>
      </div>
    )
  }
  return <div>{ info.type }</div>
}

export default () => {
  const [src, setSrc] = useState('')
  const [message, setMessage] = useState('')
  const [stack, setStack] = useState([])
  const socket = useRef(null)
  const user: any = users.get(localStorage.getItem('username') as any)
  useEffect(() => {
    // socket.current = new WebSocket('wss://socket-wfeg.onrender.com')
    socket.current = new WebSocket('ws://localhost:8080')
    socket.current.onopen = () => {
      socket.current.send(JSON.stringify({ ...user, type: 1 }))
    }
    return () => {
      socket.current.send(JSON.stringify({ ...user, type: 0 }))
    }
  }, [])
  useEffect(() => {
    socket.current.onmessage = (ev: any) => {
      const data = JSON.parse(ev.data)
      if (data.type === 3) { // 图片流
        setSrc(data.payload.src)
      } else {
        setStack([...stack, data])
      }
    }
  }, [stack, src])

  const send = () => {
    socket.current.send(JSON.stringify({ ...user, msg: message, type: 2 }))
    setMessage('')
  }

  const camera = () => {
    const video: any = document.querySelector('video')
    const canvas = document.createElement("canvas")
    canvas.width = 128
    canvas.height = 96
    const ctx: any = canvas.getContext('2d')
    navigator.mediaDevices.getUserMedia({ 
      audio: false, 
      video: true
    }).then(stream => {
      video.srcObject = stream
      setInterval(() => {
        ctx.drawImage(video, 0, 0, 128, 96)
        const url = canvas.toDataURL("image/png", 0.1)
        socket.current.send(JSON.stringify({ ...user, src: url, type: 3 }))
      }, 500)
    }).catch(err => {
      console.log(err.message)
    })
  }
  return (
    <div className="flex h-full">
      <div className="flex-1 relative">
        <video className="h-full" autoPlay />
        { src && <img draggable src={src} className="absolute right-6 rounded top-2 w-[256px] h-[192px] border-2 border-white cursor-pointer" /> }
      </div>
      <div className="w-[500px] dark:bg-gray-900 bg-white rounded-md py-1 flex flex-col">
        <div className="flex-1 overflow-y-scroll">
          {
            stack.map((info: any, i: number) => <Message key={i} user={user} info={info} />)
          }
        </div>
        <div className="h-[60px] flex justify-center items-center">
          <div className="t-uiverse-input-group">
            <input className="t-uiverse-input" value={message} placeholder="输入聊天内容" autoComplete="off" onChange={e => setMessage(e.target.value)} />
            <input className="t-uiverse-button--submit" value="发送消息" type="button" onClick={send} />
          </div>
          <button className="btn btn-success text-white ml-2" onClick={camera}>视频会议</button>
        </div>
      </div>
    </div>
  )
}
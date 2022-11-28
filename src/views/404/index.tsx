import Lottie from 'lottie-react'
import json from '../../assets/lottie/404.json'

export default function() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie className="w-[500px] mt-10" animationData={json} />
    </div>
  )
}
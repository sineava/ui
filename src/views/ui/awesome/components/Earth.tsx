import BallBg from '../../../../assets/ball-bg.png'

export default function() {
  return (
    <div className="t-card">
      <div className="w-full h-full overflow-hidden relative flex justify-center items-center">
        <div className="t-earth absolute"></div>
        <div className="t-earth-ball absolute"></div>
        <div className="t-earth-airplane absolute"></div>
      </div>
    </div>
  )
}

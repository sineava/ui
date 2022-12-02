import WaterBall from './components/WaterBall'
import Map from './components/Map'

export default function() {
  return (
    <div className="flex gap-1">
      <div className="t-card">
        <WaterBall />
      </div>
      <div className="t-card">
        <Map />
      </div>
    </div>
  )
}
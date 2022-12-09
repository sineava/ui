import WaterBall from './components/WaterBall'
import Map from './components/Map'
import { chart } from '../../../utils/txt'

export default function() {
  return (
    <div className="flex gap-2 flex-wrap">
      <WaterBall {...chart.waterball} />
      <Map {...chart.map} />
    </div>
  )
}
import Girl from './components/Girl'
import Ball from './components/Ball'
import { three } from '../../../utils/txt'

export default function() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Ball {...three.ball} />
      <Girl {...three.girl} />
    </div>
  )
}
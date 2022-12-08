import Shower from './components/Shower'
import Earth from './components/Earth'
import Infinite from './components/Infinite'

export default function() {
  return (
    <div className="flex gap-x-2">
      <Shower />
      <Infinite />
      <Earth />
    </div>
  )
}
import Shower from './components/Shower'
import Earth from './components/Earth'
import Infinite from './components/Infinite'
import Type from './components/Type'
import { awesome } from '../../../utils/txt'

export default function() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Shower {...awesome.shower} />
      <Infinite {...awesome.infinite} />
      <Earth {...awesome.earth} />
      <Type {...awesome.type} />
    </div>
  )
}
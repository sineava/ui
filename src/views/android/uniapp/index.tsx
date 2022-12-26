import Express from './components/Express'
import { uniapp } from '../../../utils/txt'

export default () => (
  <div>
    <Express {...uniapp.express} direction="vertical" />
  </div>
)
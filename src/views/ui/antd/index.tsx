import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Form from './components/Form'

dayjs.locale('zh-cn')

export default () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Form />
    </ConfigProvider>
  )
}
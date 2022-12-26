import 'echarts-liquidfill'
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
  direction?: 'vertical' | 'horizontal'
}

function Wrapper() {
  return <iframe src="https://uniapp.netlify.app/#/" className={`!w-[375px] !h-[812px]`} />
}

export default ({ html, css, direction }: Type) => Code(Wrapper, { html, css, direction })
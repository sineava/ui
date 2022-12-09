import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}

function Wrapper() {
  return (
    <div className="w-full h-full overflow-hidden relative flex justify-center items-center">
      <div className="t-earth absolute"></div>
      <div className="t-earth-ball absolute"></div>
      <div className="t-earth-airplane absolute"></div>
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })
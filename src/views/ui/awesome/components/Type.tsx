import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}
function Wrapper() {
  const str = 'This is a typing demo. '
  return (
    <div className="dark:bg-gray-800 dark:text-[#fff] w-full h-full
      overflow-hidden grid place-items-center">
      <span className="t-type">
        { str }
      </span>
    </div>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })
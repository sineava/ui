import React from "react"
import Code from '../../../../components/Code'

interface Type {
  html: string
  css?: string
}
const tags = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Vue', 'Vite', 'UI/UX', 'SVG', 'Canvas', 'WebRTC']
const random = () => tags.sort(() => 0.5 - Math.random())

function Wrapper() {
  const row: number = 5
  const card = (item: string, i: number) => (
    <div
      key={item + i}
      className="px-4 py-2 bg-[#334155] mr-4 rounded shadow-lg cursor-pointer flex justify-center items-center"
    >
      <span className="mx-1 text-gray-600 font-bold text-[20px]">#</span>
      <span className="text-gray-200">{ item }</span>
    </div>
  )
  return (
    <>
      <div className="w-full h-full overflow-hidden flex
        justify-center items-center flex-col gap-y-6 relative bg-gray-900">
        {
          [...new Array(row)].map((_: null, i: number) => (
            <div
              key={i}
              className="flex"
              style={
                { '--duration': '20s', '--reverse': i % 2 ? 'reverse' : 'normal' } as any
              }>
              <div className="t-inner">
                { random().map((x: any) => card(x, i)) }
              </div>
            </div>
          ))
        }
        <div className="t-fade"></div>
      </div>
    </>
  )
}

export default ({ html, css }: Type) => Code(Wrapper, { html, css })
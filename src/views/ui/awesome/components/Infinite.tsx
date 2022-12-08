import React from "react"

const tags = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Vue', 'Vite', 'UI/UX', 'SVG', 'Canvas', 'WebRTC']
const random = () => tags.sort(() => 0.5 - Math.random())

export default function() {
  const row: number = 5
  const card = (item: string) => (
    <div className="px-4 py-2 bg-[#334155] mr-4 rounded shadow-lg cursor-pointer flex justify-center items-center">
      <span className="mx-1 text-gray-600 font-bold text-[20px]">#</span>
      <span className="text-gray-200">{ item }</span>
    </div>
  )
  return (
    <div className="bg-gray-800 t-card">
      <div className="w-full h-full overflow-hidden flex justify-center items-center flex-col gap-y-6 relative">
        {
          [...new Array(row)].map((_: null, i: number) => (
            <div className="flex" key={i} style={{ '--duration': '20s', '--reverse': i % 2 ? 'reverse' : 'normal' } as React.CSSProperties}>
              <div className="t-inner">
                { random().map((x: any) => card(x)) }
              </div>
            </div>
          ))
        }
        <div className="t-fade"></div>
      </div>
    </div>
  )
}

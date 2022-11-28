export default function({ types, current, toggle }: any) {
  return (
    <div className="dark:bg-gray-900 rounded-full bg-[#fff] inline-flex p-1 t-tabs">
      { types && types.map((type: any, i: number) => <div key={i} className={`t-tab ${current === i && 't-tab-active'}`} onClick={() => toggle(i)}>{type}</div>) }
    </div>
  )
}
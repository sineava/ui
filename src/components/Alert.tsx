import SvgIcon from './SvgIcon'

export default function({ msg }: any) {
  return (
    <div className="fixed t-alert right-4 top-20 flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-[#3f8cff]">
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-white">
        <span className="sr-only">Fire icon</span>
        <SvgIcon icon="alert" color="#3f83f8" />
      </div>
      <div className="ml-3 text-sm font-normal dark:text-white text-black">{msg}</div>
    </div>
  )
}
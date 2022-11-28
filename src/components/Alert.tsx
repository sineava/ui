import SvgIcon from './SvgIcon'

export default function() {
  return (
    <div className="fixed t-alert right-4 top-20 flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <span className="sr-only">Fire icon</span>
        <SvgIcon icon="alert" color="#3f83f8" />
      </div>
      <div className="ml-3 text-sm font-normal">先选择图片</div>
    </div>
  )
}
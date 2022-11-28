import { useDynamicSvgImport } from "./useDynamicSvgImport"

interface IProps {
  icon: string
  size?: number
  fill?: string
  color?: string
  strokeWidth?: number
}

function SvgIcon(props: IProps) {
  const { icon, size = 24, color = '#7D8592', fill = 'none', ...rest } = props
  const { loading, SvgIcon } = useDynamicSvgImport(icon)

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && <SvgIcon width={size} height={size} stroke={color} fill={fill} {...rest} />}
    </>
  )
}

export default SvgIcon
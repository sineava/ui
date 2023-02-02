import { useEffect, useRef, useState } from 'react'

interface IProps {
  icon: string
  size?: number
  fill?: string
  color?: string
  strokeWidth?: number
}

function dynamic(name: string) {
  const [loading, setLoading] = useState(false)
  const importedIconRef: any = useRef()
  useEffect(() => {
    setLoading(true)
    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (await import(`../assets/svg/${name}.svg`)).ReactComponent
      } finally {
        setLoading(false)
      }
    }
    importSvgIcon()
  }, [name])
  return { loading, SvgIcon: importedIconRef.current }
}

function SvgIcon(props: IProps) {
  const { icon, size = 24, color = '#7D8592', fill = 'none', ...rest } = props
  const { SvgIcon } = dynamic(icon)
  return (
    <>
      {SvgIcon && <SvgIcon width={size} height={size} stroke={color} fill={fill} {...rest} />}
    </>
  )
}

export default SvgIcon
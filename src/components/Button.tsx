import Loader from '@/components/Loader'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  loading?: boolean
}

export default function Button({ children, loading, ...restProps }: Props) {
  return (
    <button
      className="relative flex h-[36px] min-w-[100px] cursor-pointer items-center justify-center rounded-md bg-blue-500 text-white duration-200 hover:bg-blue-400"
      {...restProps}>
      {loading ? <Loader color="#fff" /> : <>{children}</>}
    </button>
  )
}

// (객체/배열) 구조 분해 할당! (Destructuring Assignment)

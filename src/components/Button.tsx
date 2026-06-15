import Loader from '@/components/Loader'

interface Props {
  label?: string
  loading?: boolean
}

export default function Button({ label, loading }: Props) {
  return (
    <button className="relative flex h-[36px] min-w-[100px] cursor-pointer items-center justify-center rounded-md bg-blue-500 text-white duration-200 hover:bg-blue-400">
      {loading ? <Loader color="#fff" /> : <>{label}</>}
    </button>
  )
}

// (객체/배열) 구조 분해 할당! (Destructuring Assignment)

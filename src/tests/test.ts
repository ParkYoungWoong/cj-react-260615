// 변수선언 변수이름: 타입 = 데이터
let abc = 123

console.log(typeof abc) // 'number'

function getDouble(count: number): 반환타입 {
  return count * 2
}

// string, number, boolean, undefined, null, symbol, bigint, ...
// 배열 => 아이템타입[]
// 객체 =>

const xyz: number[] = [] // never[]
xyz.push(123)

interface HelloWorld {
  name: string
  age: number
  isValid: boolean
}
const user: HelloWorld = {
  name: '박영웅',
  age: 123,
  isValid: true
}
console.log(user)

const el: HTMLDivElement | null = document.querySelector('div')

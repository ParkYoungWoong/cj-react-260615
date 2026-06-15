// // 변수선언 변수이름: 타입 = 데이터
// let abc = 123

// console.log(typeof abc) // 'number'

// function getDouble(count: number): 반환타입 {
//   return count * 2
// }

// // string, number, boolean, undefined, null, symbol, bigint, ...
// // 배열 => 아이템타입[]
// // 객체 =>

// const xyz: number[] = [] // never[]
// xyz.push(123)

// interface HelloWorld {
//   name: string
//   age: number
//   isValid: boolean
// }
// const user: HelloWorld = {
//   name: '박영웅',
//   age: 123,
//   isValid: true
// }
// console.log(user)

// // 제네릭, 타입변수
// function add<T>(a: T, b: T): T {
//   return a + b
// }

// add(1, 2) // 3
// add('a', 'b') // 'ab'
// // add<number>(1, 'b') // '1b'

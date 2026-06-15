const user = {
  name: 'heropy',
  age: 85,
  isValid: true,
  emails: []
}

const { age, emails, ...abc } = user
console.log(age, emails) // 85 []
console.log(abc) // { name: 'heropy', isValid: true }

interface Person {
  name: string
}
interface User extends Person {
  age: number
  isValid: boolean
}

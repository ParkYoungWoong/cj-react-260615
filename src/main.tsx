import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Router from '@/routes'

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>
)

// !데이터 ==>> 부정 연산자 // for JS
// 데이터! ==>> 타입 단언(Assertion) // for TS
// 16:01

// Falsy(거짓)
// false, 0, '', null, undefined, NaN, 0n
// Truthy(참)
// {}, [], ...

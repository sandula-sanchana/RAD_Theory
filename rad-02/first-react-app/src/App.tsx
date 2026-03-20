import './App.css'
import { Title } from './components/Title'
import { useState } from 'react'

const App = () => {



  const [count,setCount] = useState(0)

  const dataList = [
    { name: "sandula", age: 25 },
    { name: "saman", age: 30 },
    { name: "nimal", age: 35 },
    { name: "kamal", age: 40 }
  ]

  const newDataList = dataList.map((item, index) => {
    return <Title key={index} name={item.name} age={item.age} />
  })

  const handleClickforAdd = (e) => {
    console.log(e)
   console.log("button clicked")
   e.target.textContent="clicked"
   setCount(count+1)
  }
    const handleClickforReduce = (e) => {
    console.log(e)
   console.log("button clicked")
   e.target.textContent="clicked"
   setCount(count-1)
  
  }

  return (
    <>
      {/* <Title>Hello, World!</Title> */}
      <Title children="Hello, World!" />
      {newDataList}
      <h1>count: {count}</h1>
      <button onClick={handleClickforAdd}>Click me to add</button>
      <button onClick={handleClickforReduce}>Click me to reduce</button>
    </>
  )

}

export default App
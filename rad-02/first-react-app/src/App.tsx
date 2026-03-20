import './App.css'
import { Title } from './components/Title'

const App = () => {

  const dataList = [
    { name: "sandula", age: 25 },
    { name: "saman", age: 30 },
    { name: "nimal", age: 35 },
    { name: "kamal", age: 40 }
  ]

  const newDataList = dataList.map((item, index) => {
    return <Title key={index} name={item.name} age={item.age} />
  })

  const handleClick = (e) => {
    console.log(e)
   console.log("button clicked")
   e.target.textContent="clicked"
  }

  return (
    <>
      {/* <Title>Hello, World!</Title> */}
      <Title children="Hello, World!" />
      {newDataList}
      <button onClick={handleClick}>Click me</button>
    </>
  )

}

export default App
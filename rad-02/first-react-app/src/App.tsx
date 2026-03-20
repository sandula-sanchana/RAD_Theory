
import './App.css'


const App=()=>{

  const name:string= "sandula"

  return (
  <>
   <h1 style={{
     color:'red'
   }} className='title'>
    hello
   </h1>
   <h3>{name}</h3>
   {name!==""?name:<h1>no name</h1>}
  </>
  )

}

export default App

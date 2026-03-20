
export const Title=(props)=>{
    const name:string= "sandula"

  return (
  <>
   <h1 style={{
     color:'red'
   }} className='title'>
    hello, this is a title component
   </h1>
   {name!==""?name:<h1>no name</h1>}

    <h4>{props.children}</h4>
    <h4>{props.name}</h4>
    <h4>{props.age}</h4>
  </>
  )
}
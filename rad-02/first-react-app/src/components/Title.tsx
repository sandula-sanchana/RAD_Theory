
export const Title=(props)=>{
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

   <h4>{props.children}</h4>
  </>
  )
}
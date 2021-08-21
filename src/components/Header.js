
const Header = (props) => {
    const alert =() =>{
        window.alert(3)
    
    }
        
  return (
<div className='bitch'>
        
      <h1 >{props.hello}</h1>
      <button className='bitch'onClick={alert}>bitchhhhhh</button>
    </div>
  )
}

export default Header

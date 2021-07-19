const ButtonA=(props)=>{


return(
    <button 
    onClick={props.onClick}
    className='btn' 
    style={{backgroundColor:props.color}} 
    >{props.showAddTask?'Close':props.text}</button>
    )

}


export default ButtonA; 
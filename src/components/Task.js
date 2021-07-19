import {FaTimes} from 'react-icons/fa'

const task=(props)=>{

return (
    <div className={`task ${props.reminder ?'reminder':''}`} 
    onDoubleClick={()=>props.onDoubleClick(props.id)}>
    <h3>{props.text}<FaTimes style={{color:'red' ,cursor: 'pointer'}} onClick={()=>props.onDelete(props.id)}/></h3>
    <p>{props.day}</p>
    </div>
    )


}
export default task
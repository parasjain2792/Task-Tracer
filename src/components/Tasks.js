
import Task from './Task'
const Tasks=({tasks,onDelete,onDoubleClick})=>{


return(
    

    <div>
    {tasks.map((task,index)=>(
       <Task key={index}  id={task.id} text={task.text} day={task.day} reminder={task.reminder} onDelete={onDelete} onDoubleClick={onDoubleClick}/>
        ))
    }
    </div>
      
    
    )


}

export default Tasks

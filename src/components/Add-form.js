import {useState} from 'react'

export const Addform = ({onAdd}) => {
   const [text,setText]=useState('');
   const [Day,setDay]=useState('');
   const [reminder,setReminder]=useState(false);
const onSubmit= (e)=>{
    e.preventDefault()

if(!text){
    alert('Please Enter the text');    
}

onAdd({text,Day,reminder})

setText('');
setDay('');
setReminder('');


}

    return (
        <form className='add-form' onSubmit={onSubmit}>
             <div className='form-control'>
               <label >Task</label>
               <input type='text'  placeholder='Add Task..' className='form-control-input' value={text} onChange={(e)=>setText(e.target.value)}/>
             </div>
             <div className='form-control'>
               <label>Day and Time</label>
               <input type='text' placeholder='Add day and time' className='form-control-input' value={Day} onChange={(e)=>setDay(e.target.value)}/>
             </div>  
             <div className='form-control-check'>
             <label>Set Remainder</label>
             <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
           </div>  
        <input type='submit' value='Save Task' className='btn btn-block'/>

        </form>
    )
}
export default Addform
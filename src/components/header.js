import ButtonA from './button.js'
import {useLocation} from 'react-router-dom'
const Header=({onClick,showAddTask})=>{
const Location=useLocation()

return (
       <header className='header' >
       <h1>Task-Tracer</h1>
       {Location.pathname==='/' &&<ButtonA 
       showAddTask={showAddTask}
       onClick={onClick}
       color='green' 
       text='Add' 
       />}
       </header>
       

)


}
export default Header;
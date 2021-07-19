import Header from './components/header.js'
import Tasks from './components/Tasks.js'
import Addform from './components/Add-form.js'
import Footer from './components/footer.js'
import {useState,useEffect} from 'react'
import About from './components/About.js'
import {BrowserRouter as Router ,Route} from 'react-router-dom'

function App() {
  //const name='Paras'
  const [tasks,setTasks]=useState([])
    
    const [showAddTask,setShowAddTask]=useState(false);

    const onAdd=async (task)=>{
       const res= await fetch(`http://localhost:5000/tasks`,{
         method:'POST',
         headers :{
          'Content-Type' : 'application/json'
          
         },
        body: JSON.stringify(task)  
       })


       const data=res.json()
       setTasks([...tasks,data])
      // const id=Math.floor(Math.random()*100000)+1;
      // const newTask={id, ...task};
      // console.log(newTask);

      // setTasks([...tasks,newTask]) ;
      
    }

    const onDelete= async (id)=>{
      await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE',
      })

      setTasks(tasks.filter((task)=>task.id!==id))
    
    }  
    const Togglereminder=(id)=>{
      setTasks(tasks.map((task)=>task.id===id ?{...task , reminder:!task.reminder}:task))
        
    }
   const onClick=()=>{
       setShowAddTask(!showAddTask);

   }
   useEffect(()=>{
    const getTasks=async ()=>{
  const tasksFromServer=await fetchTasks()
  setTasks(tasksFromServer)
    }

   getTasks();
   },[])

const fetchTasks= async () =>{

const res=await fetch('http://localhost:5000/tasks')
const data=await res.json()
return data
}

  return (
    
          <Router>
          <div className='container'>
              <Route path="/" exact render={(props)=>(
               <>
                 <Header onClick={onClick} showAddTask={showAddTask}/> 
                {showAddTask && <Addform onAdd={onAdd}/>}
                {tasks.length>0 ?<Tasks tasks={tasks} onDelete={onDelete} onDoubleClick={Togglereminder} />: 'No More Tasks'}
               </>
            )}
            />
          <Route path="/about" component={About}/>
          <Footer />
          </div>
        </Router>

  )
}

export default App;

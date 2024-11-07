import React, { useState } from 'react'
import Create from './Create'
const Home = () => {
    const[todos,setTodos] = useState([])
  return (
    <div className='text-center'>
        
     <h2>To DO List</h2>
     <br />
     <div className='flex flex-col justify-center items-center gap-4 '>
 <Create/>
     {
        todos.length === 0 ?
        <div className=''>Norecord</div>:
        todos.map(todo =>(
            <div>
                {todo}
            </div>
        )
        )
     }
        
     </div>
    
    </div>
  )
}

export default Home

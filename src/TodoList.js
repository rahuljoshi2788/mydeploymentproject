import React,{ useState, useEffect } from 'react';

const TodoList = () =>{

    const todos =[

        {
            id:1,
            job:"Clean the fans"

        },
        {
            id:2,
            job:"Clean the fridge"

        }
    ]

    const [todojobs,setToDoJobs]=useState(todos)

    const deletejob =(id) =>{
        
               
        console.log(id)

        let newarr=todojobs.filter((job) => job.id !== id)

        setToDoJobs(newarr)

    }

    let jobs=todojobs.map((todo)=>{

return (
        <div>
        <li>{todo.id}</li>
        <li>{todo.job}</li>
        <button onClick={() =>deletejob(todo.id)}>Delete a job</button>
        
        </div>
)       

    })

return (

    <div>
    <h1>{jobs}</h1>
    
    </div>

)
}

export default TodoList;
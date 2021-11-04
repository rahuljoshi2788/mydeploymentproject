import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
import TodoList from '../../TodoList';


const Home = (props) =>{

   
    
    const[students,setStudents] = useState([]);

    //react hooks
    //empty array is dependencies
    //if the component state changes, it will get executed based on the change
    
    useEffect(()=>{

        loadStudents();
        // console.log("Hello from useEffect");


    },[])

    const loadStudents = async () => {

        
        await axios.get("http://localhost:9291/getstudents")
        .then(response => {setStudents(response.data)
        console.log(response.data)
        })
        .catch(error => console.log(error)) 
       

    }


    return (

        <div className="container">

        <div className="py-4">

        <h1>{props.heading}</h1>
        <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Age</th>
            <th scope="col">Dept ID</th>
            <th scope="col">Dept name</th>
            <th scope="col">Edit Student</th>
            

            </tr>
        </thead>
        <tbody>
           {
               students.map((user,index) => (

                <tr>
                    <th scope="row">{index +1}</th>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.city}</td>
                    <td>{user.age}</td>
                    <td>{user.department.id}</td>
                    <td>{user.department.name}</td>
                    <td>
                      <Link class="btn btn-outline-primary mr-2" to={`/students/edit/${user.id}`}>Edit Student</Link>  
                    </td>
                    
                </tr>

               ))}
    
        </tbody>
        </table>

        </div>
                <TodoList/>
        

        </div>

    )
}

export default Home;
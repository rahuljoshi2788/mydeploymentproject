import userEvent from '@testing-library/user-event';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'




const AddUser = () => {

    let history=useHistory();

    const[student,setStudent] = useState({
        name:"",
        city:"",
        age:"",
       
    }
    )

    const [items,setItems] = useState([]);

    useEffect(()=>{

        loadDepartments();
        // console.log("Hello from useEffect");


    },[])

    const loadDepartments = async () => {

        const response = await axios.get("http://localhost:9291/getAllDepartments");
        
        // const body = response.json();
        console.log(response.data);

        setItems(response.data);


    }
    // let {name,city,age}=student
    

    const onInputChange= (e) =>{

        setStudent({...student,[e.target.name]:e.target.value})

    }


    const onSubmit= async (e) => {
        e.preventDefault();

        console.log(student);


        await axios.post("http://localhost:9291/save",student);
        history.push("/");


    }


    return(

        <div className="container">
                <form onSubmit={(e) => onSubmit(e)}>

                    
                    <div class="mb-3">
                        <label class="form-label">Student Name</label>
                        <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="studentid"
                                name="name"
                                value={student.name}
                                onChange={(e) =>onInputChange(e)}
                                 />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">City</label>
                        <input type="text" 
                                class="form-control" 
                                id="studentcity" 
                                name="city"
                                value={student.city}
                                onChange={(e) =>onInputChange(e)}
                                />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Age</label>
                        <input type="number" 
                        class="form-control" 
                        id="studentage"
                        name="age"
                        value={student.age}
                        onChange={(e) =>onInputChange(e)}
                        />
                    </div>

                    <div>
                    <select>
                    {items.map((item) => (
                    <option key={item.id} value={item.name}>
                    {item.name}
                    </option>
                    ))}
                    </select>

                    </div>
                    <br></br>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

        </div>
        

    )

}

export default AddUser;
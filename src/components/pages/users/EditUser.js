import userEvent from '@testing-library/user-event';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory , useParams} from 'react-router-dom'




const EditUser = () => {

    let history=useHistory();

    const{id} = useParams();

   

    const[student,setStudent] = useState({
        name:"",
        city:"",
        age:"",
       
    }
    )

    useEffect(()=>{

        loadStudent();
        // console.log("Hello from useEffect");


    },[])

    // let {name,city,age}=student
    
    const loadStudent = async () =>{

        const result= await axios.get(`http://localhost:9291/getStudentById/${id}`);
        //console.log(result.data)
        setStudent(result.data)


    }


    const {name,city,age,department}=student;
    const onInputChange= (e) =>{

        setStudent({...student,[e.target.name]:e.target.value})

    }

    const onSubmit= async (e) => {
        e.preventDefault();
        console.log(student)
        await axios.put(`http://localhost:9291/saveStudentById/${id}`,student);
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

                    

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

        </div>
        

    )

}

export default EditUser;
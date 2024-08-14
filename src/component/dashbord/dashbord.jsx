import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent } from "../../redux/slice/appslice";
import { editstudent } from "../../redux/slice/editslice";
import {Link, useNavigate} from 'react-router-dom'

const Dashpage = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.student.studData);
    const navigate = useNavigate()

    const handEdit =(stud)=>{
        dispatch(editstudent(stud))
        navigate('/update')
    }

    return (
        <>
            <div className=" d-flex justify-content-center bg-dark-subtle" style={{height:'100vh',width:'100%'}}>
                <div className="w-75 pt-5">
                    <div className=" d-flex justify-content-between p-2" ><span className="fw-medium fs-2">Students Details</span>  <Link to='/update' className="btn btn-info">Add student</Link></div>
                    <table className="table table-striped w-100" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>class</th>
                                <th>marks1</th>
                                <th>marks2</th>
                                <th>marks3</th>
                                <th>Total</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{student.Name}</td>
                                        <td>{student.Age}</td>
                                        <td>{student.Gender}</td>
                                        <td>{student.Class}</td>
                                        <td>{student.Marks1}</td>
                                        <td>{student.Marks2}</td>
                                        <td>{student.Marks3}</td>
                                        <td>{student.Marks1+student.Marks2+student.Marks3}</td>
                                        <td><button onClick={()=>handEdit(student)} className="btn btn-primary">Edit</button></td>
                                        <td><button onClick={()=>dispatch(removeStudent(student.id))} className="btn btn-danger bi-trash"></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table >
                </div>
            </div>
        </>
    );
};

export default Dashpage;

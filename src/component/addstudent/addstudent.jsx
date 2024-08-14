import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {addStudent} from '../../redux/slice/appslice';
import { editstudent } from '../../redux/slice/editslice';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Addstudent = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const editstudents = useSelector((state) => state.updateStudent);

    return(
        <>
            <Formik 
             initialValues={{id:editstudents.id,userName: editstudents.Name||'',userDOB:editstudents.Age||'',Gender:editstudents.Gender||'',class:editstudents.Class||'',marks1:editstudents.Marks1||'',marks2:editstudents.Marks2||'',marks3:editstudents.Marks3||''}}
             validationSchema={yup.object({
                userName:yup.string().required(),
                userDOB:yup.string().required(),
                Gender:yup.string().required(),
                class:yup.string().required(),
                marks1:yup.number().required(),
                marks2:yup.number().required(),
                marks3:yup.number().required(),
             })}
             onSubmit={(formdata, { resetForm }) => {
                try{
                    dispatch(addStudent(formdata));
                    navigate('/profile')
                    dispatch(editstudent({
                        id:'',
                        userName:'',
                        userDOB:'',
                        Gender:'',
                        class:'',
                        marks1:'',
                        marks2:'',
                        marks3:'',
                    })) 
                    resetForm();  // Call resetForm to reset the form after submission
                }catch(error){
                    console.log('error while adding students',error)
                }
            }}
            >
                {
                    form=><Form style={{ height: '100vh', width: "100%" }} className='d-flex justify-content-center align-items-center'>
                        <dl style={{ width: '450px', height: 'auto' }} className='border border-2 border-dark rounded-2 p-3'>
                            <h3 className=' bi-person-add'> Add Student Details</h3>
                            <hr />
                            <dt>Name</dt>
                            <dd><Field type='input' name='userName' placeholder='Name' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='userName' /></dd>
                            <dt>DOB</dt>
                            <dd><Field type='date' name='userDOB' placeholder='Date of birth' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='userDOB' /></dd>
                            <dt>Gender</dt>
                            <dd className='form-check'>
                                <Field type='radio' name='Gender' id='Male' value='Male' className='form-check-input' />
                                <label htmlFor='Male' >Male</label >
                            </dd>
                            <dd className='form-check'>
                                <Field type='radio' name='Gender' id='Female' value='Female' className='form-check-input' />
                                <label htmlFor='Female' >Female</label >
                            </dd>
                            <dd className='text-danger'><ErrorMessage name='Gender' /></dd>
                            <dt>Class</dt>
                            <dd>
                                <Field as='select' name='class' className='form-select' >
                                    <option value="-1">--select--</option>
                                    <option value="6">6th</option>
                                    <option value="7">7th</option>
                                    <option value="8">8th</option>
                                    <option value="9">9th</option>
                                    <option value="10">10th</option>
                                </Field>
                            </dd>
                            <dd className='text-danger'><ErrorMessage name='class' /></dd>
                            <dt>marks1</dt>
                            <dd><Field type='number' name='marks1' placeholder='Enter marks1' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='marks1' /></dd>
                            <dt>marks2</dt>
                            <dd><Field type='number' name='marks2' placeholder='Enter marks2' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='marks2' /></dd>
                            <dt>marks3</dt>
                            <dd><Field type='number' name='marks3' placeholder='Enter marks3' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='marks3' /></dd>
                            <hr />
                            <dd className='d-flex justify-content-between'><button className='btn btn-success' type='submit' >Update</button><button type='resert' className='btn btn-warning'>Resert</button></dd>
                        </dl>
                    </Form>
                }
            </Formik>
        </>
    )
}
export default Addstudent
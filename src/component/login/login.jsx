import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'


const Login = () => {

    const users ={
        userName:'Sham_108',
        password:'108108'
    }
    const isPresent = localStorage.getItem('userName')
    const navigate = useNavigate()

    useEffect(()=>{
        if(isPresent){
            navigate('/update')
        }
    })

    return (
        <>
            <Formik 
            initialValues={{userName:'',Password:''}}
            validationSchema={yup.object({
                userName:yup.string().required(),
                Password:yup.string().required('password is required')
            })}
            onSubmit={async (formdata)=>{
                try{
                    if(users.userName == formdata.userName  && users.password == formdata.Password)
                    {
                        localStorage.setItem('userName',formdata.userName)
                        navigate('/update')
                    }
                    else{
                        navigate('/notfound')
                    }
                }catch(error){
                    console.log(error,'error while login')
                }

            }}
            >
                {
                    form => <Form style={{ height: '100vh', width: "100%" }} className='d-flex justify-content-center align-items-center'>
                        <dl style={{ width: '300px', height: '250px' }} className='border border-2 rounded-2 p-3'>
                            <h3 className='bi-person'>Login</h3>
                            <dt>userName</dt>
                            <dd><Field type='input' name='userName' placeholder='Ex:Sham_108' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='userName' /></dd>
                            <dt>Password</dt>
                            <dd><Field type='password' name='Password' placeholder='Ex:108108' className='form-control' /></dd>
                            <dd className='text-danger'><ErrorMessage name='Password' /></dd>
                            <dd><button type='submit' className='btn btn-warning w-100'>login</button></dd>
                        </dl>
                    </Form>
                }
            </Formik>
        </>
    )
}
export default Login
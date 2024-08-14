import React from "react"
import { Link } from "react-router-dom"

const NotFound= ()=>{
    return(
        <div>
            <div className="text-danger text-center pt-5">Users Credantial are not found, Please Enter valid Credantial's</div>
            <div className="text-center">
                <Link to='/' className="btn btn-warning">Login</Link>
            </div>
        </div>
    )
}
export default NotFound
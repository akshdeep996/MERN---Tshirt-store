import React,{useState} from "react";
import Base from "../core/Base";
import {Link,Redirect} from "react-router-dom";
import { isAuthenticated, authenticate,signin } from "../auth/helper";

const Signin = () => {

    const [values,setValues] = useState({

        email:"",
        password:"",
        error:"",
        loading:false,
        didredirect:false
    })

    const {email,password,error,loading,didredirect} = values


    const onSubmit = event => {
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data => {
            if(data.error) {
                setValues({...values, error:data.error, loading:false})
            } else {
                authenticate( data , () => {
                    setValues({
                        ...values,
                        didredirect:true

                    })
                })
            }
        })
        .catch(console.log("Signin request failed"))
    }

    const {user} = isAuthenticated();

    const performRedirect = () => {
        //TODO Redirect
        if(didredirect) {
            if(user && user.role === 1) {
                return <p>Redirect to admin</p>
            }
            else {
                return <p> Redirect to user Dashboard</p>
            }
        }
        if (isAuthenticated) {
            // return <Redirect to="/" />
            return <p> Sahi hai bhai</p>
        }
    }

    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2> Loading...</h2>
                </div>
            )
    )};
    
    const errorMessage = () => {
      return(
       <div className="row">
          <div className="col-md-6 offset-sm-3 text-left"><div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
       {error}
      </div>
      </div>
      </div>
      )};

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };

    const signInForm = () => {
        
        
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">
                                Email
                            </label>
                            <input onChange={handleChange("email")} value={email} className="form-control" type="email"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Password
                            </label>
                            <input  onChange={handleChange("password")} value={password} className="form-control" type="password"/>
                        </div>
                        <button  onClick={onSubmit} className="btn btn-success btn-block">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
    
    console.log("Akshdeep is best")
    debugger

    return (
        <Base title="Signin  page" description="A page to Signin in for user" >
        <h1>Akshdeep is great</h1>
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
        <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signin;

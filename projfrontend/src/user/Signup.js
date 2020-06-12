import React,{useState} from "react";
import Base from "../core/Base";
import { Link, withRouter } from "react-router-dom";

const Signup = () => {

    const signUpForm = () => {
        console.log("Sign up form")
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">
                                Name
                            </label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Email
                            </label>
                            <input className="form-control" type="email"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Password
                            </label>
                            <input className="form-control" type="password"/>
                        </div>
                        <button className="btn btn-success btn-block">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
    
    return (
        <div>
        <Base title="Sign up page" description="A page to sign up for user" >
        
        {signUpForm()}
        </Base>
        </div>
    );
};

export default withRouter(Signup);

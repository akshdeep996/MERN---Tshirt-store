import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoutes from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/signin" exact component={Signin}/>
                    <PrivateRoute path="/user/dashboard" exact component={UserDashBoard}/>
                    <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard}/>

                </Switch>
            </BrowserRouter>
        </div>
    )
}


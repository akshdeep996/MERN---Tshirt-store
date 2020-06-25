import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoutes from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories'
import AddProduct from './admin/AddProduct';


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
                    <AdminRoutes path="/admin/create/category" exact component={AddCategory}/>
                    <AdminRoutes path="/admin/categories" exact component={ManageCategories}/>
                    <AdminRoutes path="/admin/create/product" exact component={AddProduct}/>

                </Switch>
            </BrowserRouter>
        </div>
    )
}


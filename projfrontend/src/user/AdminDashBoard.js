import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();


  const adminLeftSide = () => {
      return (
        <div className="card">
            <h4 className="card-header bg-dark text-white">
                Admin Navigation
            </h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link
                    to="/admin/create/category"
                    className="nav-link text-info"
                    > Create Categories</Link>
                </li>
                <li className="list-group-item">
                    <Link
                    to="/admin/categories"
                    className="nav-link text-info"
                    > Manage Categories</Link>
                </li>
                <li className="list-group-item">
                    <Link
                    to="/admin/create/product"
                    className="nav-link text-info"
                    > Create Product</Link>
                </li>
                <li className="list-group-item">
                    <Link
                    to="/admin/products"
                    className="nav-link text-info"
                    > Manage products</Link>
                </li>
                <li className="list-group-item">
                    <Link
                    to="/admin/orders"
                    className="nav-link text-info"
                    > Manage orders</Link>
                </li>
            </ul>
        </div>

      )
  };

  const adminRighSide = () => {
    return (
        <div className="card mb-4">
            <h4 className="card-header">Admin information</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="badge badge-success mr-2">
                        Name: {name}
                    </span>
                </li>
                <li className="list-group-item">
                    <span className="badge badge-success mr-2">
                        Email: {email}
                    </span>
                </li>
                <li className="list-group-item">
                    <span className="badge badge-danger">
                        Admin Area !
                    </span>
                </li>
            </ul>
        </div>

      )
  };


  return (
    <Base
      title="Welcome to admin Area"
      description="Manage all your products here."
      className="container bg-info p-4"
    >
    <div className="row">
        <div className="col-3"> {adminLeftSide()}</div>
        <div className="col-9">{adminRighSide()}</div>

    </div>
    
    </Base>
  );
};

export default AdminDashBoard;

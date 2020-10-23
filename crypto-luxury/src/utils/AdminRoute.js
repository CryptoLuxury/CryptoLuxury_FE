import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const ADMIN = process.env.REACT_APP_ADMIN;

const AdminRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
        <Route {...rest} render={(props) => {
            if (token && ADMIN) {
                return <Component {...props} />
            } else {
                return <Redirect to="/admin/login"/>
            }
        }}
        />
    )
};
export default AdminRoute;
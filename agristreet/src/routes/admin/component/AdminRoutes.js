import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Row, Col } from "antd";
import Admin from "./admin";

import Dashboard from "./Body/Dashboard/dashboard";
import Order from "./Body/Order/order";
import Inventory from "./Body/Inventory/inventory";
import Product from "./Body/Product/product";
import Maintenance from "./Body/Maintenance/maintenance";
import Profile from "./Body/Profile/profile";
import Account from "./Body/Account/account";

class AdminRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Admin>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/admin" component={Dashboard} />
                    <Route path="/admin/order" component={Order} />
                    <Route path="/admin/inventory" component={Inventory} />
                    <Route path="/admin/product" component={Product} />
                    <Route path="/admin/maintenance" component={Maintenance} />
                    <Route path="/admin/profile" component={Profile} />
                    <Route path="/admin/account" component={Account} />
                </Switch>
            </Admin>
        );
    }
}

export default AdminRoutes;

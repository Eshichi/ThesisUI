import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import AdminRoutes from "./routes/admin/component/AdminRoutes";

function App() {
    return (
        <BrowserRouter>
            {/* <Switch>
                <Route exact path="/Admin" component={AdminRoutes} />
            </Switch>
             */}
            <AdminRoutes />
        </BrowserRouter>
    );
}

export default App;

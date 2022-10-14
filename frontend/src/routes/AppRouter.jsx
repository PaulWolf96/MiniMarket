import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "../pages/contacto/contacto";
import QuienesSomos from "../pages/quienessomos/QuienesSomos";
import Index from "../pages/index/index";
import Login from "../components/common/LoginForm";
import Register from "../pages/register/Register";
import AcercaDeNosotros from "../pages/quienessomos/AcercaDeNosotros";



const AppRoute = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/home" component={Index} />
                <Route exact path="/quienessomos" component={QuienesSomos} />
                <Route exact path="/contacto" component={Contact} />
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/acercadenosotros" component={AcercaDeNosotros} />
            </Switch>
        </Router>
    );
};

export default AppRoute;
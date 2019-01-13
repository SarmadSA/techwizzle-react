import React from "react";
import {Route, Switch} from "react-router-dom";
import Profilespage from "../pages/Profilespage";
import Comparepage from "../pages/Comparepage";
import Aboutpage from "../pages/Aboutpage";
import Contactpage from "../pages/Contactpage";
import Profile from "../pages/Profile";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";


const Routes = () =>{
    return(
        <Switch>
            <Route path="/profiles" exact component={Profilespage}/>
            <Route path="/compare" exact component={Comparepage}/>
            <Route path="/about" exact component={Aboutpage}/>
            <Route path="/contact" exact component={Contactpage}/>
            <Route path="/profile/:id" exact component={Profile}/>
            <Route path="/home" exact component={Homepage}/>
            <Route path="/" exact component={Homepage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;
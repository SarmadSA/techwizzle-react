import React from "react";
import {Route, Switch} from "react-router-dom";
import ProfilesPage from "../pages/ProfilesPage";
import ComparePage from "../pages/ComparePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Profile from "../pages/Profile";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";


const Routes = () =>{
    return(
        <Switch>
            <Route path="/profiles" exact component={ProfilesPage}/>
            <Route path="/compare" exact component={ComparePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/profile/:id" exact component={Profile}/>
            <Route path="/home" exact component={HomePage}/>
            <Route path="/" exact component={HomePage}/>
            <Route render={()=> <NotFoundPage/>}/>
        </Switch>
    );
};

export default Routes;
import React from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router} from "react-router-dom";
import {Route,Switch,Link} from "react-router-dom";

export default function Navigate()
{
    return(
    <div>
    <table>
    <Link to="/Pages/home.js" style={{textDecoration:'none'}}>
          <tr><td> <Button color="primary">Home</Button></td></tr>
    </Link>
    <Link to="/Pages/about.js" style={{textDecoration:'none'}}>
          <tr><td> <Button color="primary">About</Button></td></tr>
    </Link>
    <Link to="/Pages/login.js" style={{textDecoration:'none'}}>
           <tr><td> <Button color="primary">Log IN</Button></td></tr>
    </Link>
    <Link to="/Pages/signup.js" style={{textDecoration:'none'}}>
           <tr><td> <Button color="primary">Sign Up</Button></td></tr>
    </Link>
</table>
<Link to="#"style={{textDecoration:'none'}}>
    <div style={{ height: 20, width: '40%',paddingLeft:'39%',align:'right' }}>
            <h2>Protected Routing Demo:</h2>
    </div>
</Link>
    </div>


    );
}
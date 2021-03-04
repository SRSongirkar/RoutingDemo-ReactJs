import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {BrowserRouter as Router} from "react-router-dom";
import {Route,Switch,Link} from "react-router-dom";



const Signupview=()=>{
const paperstyle={padding:'30px 20px', width:300,margin:"20px auto"}
const headerstyle={margin:'0'}
const avtarstyle={backgroundColor:'green'}
const marginTop={marginTop:5}


    return(
        <Grid>
            <Paper elevation='20'style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avtarstyle}>

                    </Avatar>
                    <h2 style={headerstyle}>LogIn Form</h2>
                    <Typography variant="caption">Log In Your Account :)</Typography>


                </Grid>
                    <form>

                            <TextField fullWidth name="email" label="Enter your Email-Id"></TextField>
                            <TextField fullWidth name="password"label="Enter Password"type="password"></TextField>

                           <Link to="/App.js" style={{textDecoration:'none',paddingLeft:'100px'}}>
                                  <Button type="submit" variant="contained"color="primary"style={marginTop}>Log In</Button>
                            </Link>
                    </form>
            </Paper>
        </Grid>

    );

}
export default Signupview;

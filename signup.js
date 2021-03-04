import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {BrowserRouter as Router} from "react-router-dom";
import {Route,Switch,Link} from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const Signupview=()=>{
const paperstyle={padding:'30px 20px', width:300,margin:"20px auto"}
const headerstyle={margin:'0'}
const avtarstyle={backgroundColor:'purple'}
const marginTop={marginTop:5}
    return(
        <Grid>
            <Paper elevation='20'style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avtarstyle}>

                    </Avatar>
                    <h2 style={headerstyle}>Register Form</h2>
                    <Typography variant="caption">Fill This Form To Create An Account :)</Typography>


                </Grid>
                    <form>
                            <TextField fullWidth label="Enter your Full Name"></TextField>
                            <TextField fullWidth label="Enter your Email-Id"></TextField>
                            <TextField fullWidth label="Enter your Mobile No"></TextField>

                            <FormControl component="fieldset" style={marginTop}>
                              <FormLabel component="legend">Gender</FormLabel>
                              <RadioGroup aria-label="gender" name="gender1" style={{display:"initial"}}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                              </RadioGroup>
                            </FormControl>

                            <TextField fullWidth label="Enter Password"type="password"></TextField>
                            <TextField fullWidth label="Enter Confirm Password"type="password"></TextField>
                           <Link to="/Pages/login.js" style={{textDecoration:'none',paddingLeft:'100px'}}>
                                  <Button type="submit" variant="contained"color="primary"style={marginTop}>Sign Up</Button>
                            </Link>
                    </form>
            </Paper>
        </Grid>

    );

}
export default Signupview;

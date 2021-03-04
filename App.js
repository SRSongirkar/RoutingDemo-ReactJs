import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Route,Switch,Link} from "react-router-dom";
import Navigate from './Navigate/dashboard.js';
import Loginview from'./Pages/login.js';
import Signupview from'./Pages/signup.js';
function App() {
  return (
  <Router>
            <Navigate/>
     <Switch>

            <Route path="/Pages/login.js"><Loginview/></Route>
            <Route path="/Pages/signup.js"><Signupview/></Route>
     </Switch>
  </Router>
  );
}

export default App;

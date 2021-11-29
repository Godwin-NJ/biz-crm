import Login from './component/login'
import Signup from './component/signup'
import Crm from './component/crm'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';


function App() {

  const[token, setToken] = useState(null)

  if(!token){
    <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Crm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

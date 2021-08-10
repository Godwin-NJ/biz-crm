import Login from './component/login'
import Signup from './component/signup'
// import Crm from './component/crm'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/signup" component={Signup} />
            {/* <Crm /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

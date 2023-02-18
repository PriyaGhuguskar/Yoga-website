import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navcompo from './Component/Navcompo';
import HeadCompo from './Component/HeadCompo';
import RegistrationForm from './Component/Signup/index';
import Time from './Component/Time';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navcompo/>
      <Switch>
        <Route exact path="/">
        <HeadCompo/>
        </Route>
        <Route path="/signup" >
          <RegistrationForm />
        </Route>
        <Route path="/schedule" >
          <Time />
        </Route>
        
      </Switch>

    </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;

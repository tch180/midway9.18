import React  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Home/Homepage';
import Features from './features/features';
import Navbar from './navbar/NavBar';
import Pricing from './pricing/pricing';

function App(){

  
  return (
    <div className="App" style={{fontFamily: "lato,sans-serif"}}>
      <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/features' component={Features}/>
          {/* <Route  path='/features' component={Features}/> */}
          <Route path='/pricing' component={Pricing} />

        </Switch>
      </Router>
      </React.Fragment>
      
    </div>
  );
  }


export default App;

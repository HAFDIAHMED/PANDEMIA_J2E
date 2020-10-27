import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Donation from './Donation';
import Dashboard from './Dashboard';
import Help from './Help';
import Product from './Product';
import Logout from './Logout';
import Addproduct from './Addproduct';
import Addmagazin from './Addmagazin';
import Magazin from './Magazin';
import MyMagazin from './MyMagazin';



import './App.css';
import{BrowserRouter as Router, Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}   />
        <Route path="/home" component={Home}   />
        <Route path="/login" component={Login}   />
        <Route path="/donation" component={Donation}   />
        <Route path="/Help" component={Help}   />
        <Route path="/dashboard" component={Dashboard}   />
        <Route path="/product" component={Product}   />
        <Route path="/magazin" component={Magazin}   />
        <Route path="/logout" component={Logout}   />
        <Route path="/addproduct" component={Addproduct}   />
        <Route path="/addmagazin" component={Addmagazin}   />
        <Route path="/mymagazin" component={MyMagazin}   />




        </Switch>


    </div>
    </Router>
  );
}

export default App;

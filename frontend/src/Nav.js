import React from 'react';
import './Nav.css';
import { Link} from'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Nav() {
   //
  const user = JSON.parse(localStorage.getItem('user'));
  return(
  <div class="header">
        <ul>
          <Link to="/"><li><h1>PANDEMIA.</h1></li></Link>
          <Link to="/login"><li><a>Latest Updates</a></li></Link>
          {(user && user.accessToken) && <Link to="/dashboard"><li><a>Dashboard</a></li></Link> }
          {(user && user.accessToken) &&  <Link to="/logout"><li><a>logout</a></li></Link>}
          {!(user && user.accessToken) && <Link to="/login"><li><a>Sign in Or Sign up</a></li></Link>}



          <Link to="/donation"><li><a>Donation</a></li></Link>

        </ul>

      </div>
  );
}

export default Nav;

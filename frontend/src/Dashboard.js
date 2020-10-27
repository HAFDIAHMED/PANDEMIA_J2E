import React from 'react';
import axios from "axios";
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import { Link} from'react-router-dom';
import { Container, Image} from 'react-bootstrap';
import { Row,Col} from 'react-bootstrap';
import './Dashbord.css';


class Dashboard extends React.Component {
	constructor() {
    super();
    this.state = {headers_user : {}};
  }
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        this.state.headers_user = { Authorization: 'Bearer ' + user.accessToken };
    } else {
       this.props.history.push(`/`);
       return ;
    }
}

  render() {

	  return (
			<div>
				<Container>
					<Row>
						<Col>
							<Link to="/magazin"><Image src={require('./img/check.png')} className="header-image" /></Link>
						</Col>
						<Col>
							<Link to="/addmagazin"><Image src={require('./img/essentials/storef.png')} className="header-image" /></Link>
						</Col>
					</Row>
					<br/>
					<Row>
						<Col>
							<Link to="/mymagazin"><Image src={require('./img/my_shop.png')} className="header-image" /></Link>
						</Col>
						<Col>
							<Link to="/addproduct"><Image src={require('./img/product/product.jpg')} className="header-image" /></Link>
						</Col>

					</Row>
				</Container>



	    </div>
    );
}}

export default Dashboard;

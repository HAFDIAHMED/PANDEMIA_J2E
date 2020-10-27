import React from 'react';
import axios from "axios";
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import './Product.css';
import { Container, Row ,Col} from 'react-bootstrap';


class Product extends React.Component {
	constructor(props) {
    super(props);
    this.state = {magazin : '' ,product : '' , getProducts : [], data : {}, headers_user : {},allproducts : ''};
  }
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        this.state.headers_user = { Authorization: 'Bearer ' + user.accessToken };
    } else {
       this.props.history.push(`/`);
       return ;
    }
		if(typeof this.props.location.state ==="undefined") {
			this.props.history.push(`/`);
			return ;
		}
    axios.post("http://localhost:8080/api/magazin/",{id:this.props.location.state.id},{ headers: this.state.headers_user} )
         .then(response => {
					 this.setState({data : response.data});
					 this.state.allproducts = this.state.data.produits.map((element) => {
		         axios.post("http://localhost:8080/api/produit/",{id:element.produit},{ headers: this.state.headers_user} )
		              .then(response => {console.log(response.data);this.setState({getProducts : [...this.state.getProducts, {prix : element.prix , quantite : element.quantite,data :response.data}]});})
					})
		});
	}
  render() {
		if(typeof this.state.data.label !== "undefined") {
      this.state.magazin = <Card  title={this.state.data.label} subTitle={this.state.data.debutTravail+"->"+this.state.data.finTravail}
                   footer={"tel : "+this.state.data.telephones.map((telephone) => {return telephone.telephone+" ";})}>
                   {this.state.data.ville+","+this.state.data.address}
              </Card>
		}
    this.state.product = this.state.getProducts.map((element) => {
			return <Card title={element.data.label} footer={"Prix : "+element.prix+"; Quantite : "+element.quantite}>
										<Container>
										<Row>
												<Col>
												<img  alt="Card" src={element.data.images[0].url}/>
												</Col>
												<Col>
												{element.data.description}
												</Col>
										</Row>
										</Container>

              </Card>
		});
	  return (
			<div>
       {this.state.magazin}
			 <h5 className="title">Product : </h5>
			 {this.state.product}
	    </div>
    );
}}

export default Product;

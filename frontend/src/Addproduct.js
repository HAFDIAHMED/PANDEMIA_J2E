import React from 'react';
import './Addproduct.css';
import { Container, Image, AccordionCollapse} from 'react-bootstrap';
import { Row,Col,Card,CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { SocialIcon } from 'react-social-icons';
import { Link} from'react-router-dom';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import {Spinner} from 'primereact/spinner';




import  { useState } from 'react';
import {Chips} from 'primereact/chips';

class Addproduct extends React.Component  {
      constructor(props) {
        super(props);
        this.state = {label : '' ,description : '' , magazin : '', quantite : '', price: '' , mymagazin : [],   headers_user : {} };
      }
      componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.accessToken) {
            this.state.headers_user = { Authorization: 'Bearer ' + user.accessToken };
        } else {
           this.props.history.push(`/`);
           return ;
        }
        axios.post("http://localhost:8080/api/magazin/mymagazin/",{id:user.id},{ headers: this.state.headers_user} )
             .then(response => {this.setState({mymagazin: response.data})});
    	}
      onChange(e) {this.setState({[e.target.name] : e.target.value});}
      onSubmit(e) {
        e.preventDefault();
        let data = {
            magazin:this.state.magazin,
            label:this.state.label,
            description:this.state.description,
            quantite:this.state.quantite,
            prix:this.state.price,
            images:[""]
        }
        axios.post("http://localhost:8080/api/produit/add",data,{ headers: this.state.headers_user} )
             .then(response => {this.props.history.push(`/magazin`);return;});
      }
      render() {
        let magazin_line ;
        if(typeof this.state.mymagazin[0] !== "undefined") {
          magazin_line = this.state.mymagazin.map((element) => {return <option value={element.id}>{element.label}</option>})
    		}
      return (
        <div class="Home">
         <div class="intro">
                  <Image src={require('./img/product/product.jpg')} className="header-image" />
          </div>
          <div className="p-fluid">
              <h1>FILL IN THE INFORMATION</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
              <Container>
              <Row>
                  <Col>
                    <select name="magazin" id="magazin" value={this.state.magazin} onChange={this.onChange.bind(this)}>
                      {magazin_line}
                    </select>
                  </Col>
              </Row>
              <br/>
              <Row>
                  <Col>
                  <h3>Product Label</h3>
                  <input type="text" id="InputLabel"  name="label" placeholder="Enter Label of Product" value={this.state.label} onChange={this.onChange.bind(this)} />
                  </Col>
                  <Col>
                  <h3>Product Description</h3>
                  <input type="text" id="InputDescription"  name="description" placeholder="Enter Description of Product" value={this.state.description} onChange={this.onChange.bind(this)} />
                  </Col>
              </Row>
              <br/>
              <Row>
                  <Col>
                  <h3>Quantity</h3>
                  <input type="text" id="InputQuantite"  name="quantite" placeholder="Enter Quantite of Product" value={this.state.quantite} onChange={this.onChange.bind(this)} />
                  </Col>
                  <Col>
                  <h3>Price</h3>
                  <input type="text" id="InputPrice"  name="price" placeholder="Enter Price of Product" value={this.state.price} onChange={this.onChange.bind(this)} />
                  </Col>
              </Row>
              <Row>
                  <Col><button type="submit">Add Product</button></Col>
              </Row>
              </Container>
              </form>



          </div>

          </div>


  );
}}
export default Addproduct;

import React from 'react';
import axios from "axios";
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import{Redirect} from 'react-router-dom';
import {Container, Row,Col} from 'react-bootstrap';


class MyMagazin extends React.Component {
	constructor() {
    super();
    this.state = {magazin : '' ,product : '' , element : '' ,data : {}, headers_user : {}};
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
         .then(response => {this.setState({data : response.data})});
  }
  show(e) {
    this.setState({element : e.target.offsetParent.name})

  }
  delete(e) {
    e.preventDefault()
    this.state.data.map((element) => {
      if(element.id==e.target.offsetParent.name) {
        element.produits.map((produit) => {
          axios.post("http://localhost:8080/api/produit/deletequantite",{id:produit.produit},{ headers: this.state.headers_user} )
               .then(response => {console.log("deleted")});
          //
          axios.post("http://localhost:8080/api/produit/deleteimage",{id:produit.produit},{ headers: this.state.headers_user} )
               .then(response => {console.log("deleted")});
          //
          axios.post("http://localhost:8080/api/produit/delete",{id:produit.produit},{ headers: this.state.headers_user} )
               .then(response => {console.log("deleted")});
        });
      }
    });
    axios.post("http://localhost:8080/api/magazin/deletetelephone",{id:e.target.offsetParent.name},{ headers: this.state.headers_user} )
         .then(response => {console.log("deleted")});
    //
    axios.post("http://localhost:8080/api/magazin/delete",{id:e.target.offsetParent.name},{ headers: this.state.headers_user} )
         .then(response => {console.log("deleted")});
    this.props.history.push(`/mymagazin`);return;

  }
  render() {
    if(typeof this.state.data[0] !== "undefined")
      {this.state.magazin = this.state.data.map((element) => {
        return <Card title={
                    <Container>
                      <Row>
                        <Col>
                          <Button className="p-button-secondary p-button-rounded" label={element.label} name={element.id} onClick={this.show.bind(this)}/>
                        </Col>
                        <Col>
                          <Button className="p-button-danger p-button-rounded" label="Delete" name={element.id} onClick={this.delete.bind(this)}/>
                        </Col>
                      </Row>
                    </Container>}
                     subTitle={element.debutTravail+"->"+element.finTravail}
                     footer={"tel : "+element.telephones.map((telephone) => {return telephone.telephone+" ";})}>
                     {element.ville+","+element.address}
                </Card>})
      }


	  return (
			<div>
        {this.state.magazin}
        {this.state.element!="" && <Redirect to={{pathname: '/product',state: { id: this.state.element }}}/>}
	    </div>
    );
}}

export default MyMagazin;

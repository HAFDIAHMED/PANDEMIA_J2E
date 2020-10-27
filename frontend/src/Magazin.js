import React from 'react';
import axios from "axios";
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import{Redirect} from 'react-router-dom';

class Magazin extends React.Component {
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
    axios.get("http://localhost:8080/api/magazin/",{ headers: this.state.headers_user} )
         .then(response => {this.setState({data : response.data})});
  }
  show(e) {
    this.setState({element : e.target.offsetParent.name})

  }
  render() {
    if(typeof this.state.data[0] !== "undefined")
      {this.state.magazin = this.state.data.map((element) => {
        return <Card title={<Button className="p-button-secondary p-button-rounded" label={element.label} name={element.id} onClick={this.show.bind(this)}/>}
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

export default Magazin;

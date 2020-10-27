import React from 'react';
import axios from "axios";
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

class Logout extends React.Component {
	constructor() {
    super();
  }
  componentWillMount() {
    localStorage.removeItem("user");
    this.props.history.push(`/`);
  }
  render() {
	  return (<div></div>);
}}

export default Logout;

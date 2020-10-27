import React from 'react';
import './Login.css';
import axios from "axios";
import AuthService from './services/auth-service'

class  Login extends React.Component {
	constructor() {
    super();
    this.state = {user : '' , email : '' , password : '',errors : ''};
  }
	clickHandler(e){
			e.preventDefault();
			const container = document.getElementById('container');
			container.classList.add("right-panel-active");
		}
		clickHandlerIn(e){
			e.preventDefault();
			const container = document.getElementById('container');
			container.classList.remove("right-panel-active");
		}
		onChange(e) {this.setState({[e.target.name] : e.target.value});}
  	onSubmitlogin(e) {
			e.preventDefault();
			axios.post("http://localhost:8080/api/auth/signin", {"email":this.state.email,"password":this.state.password})
	          .then(response => {
	                        if (response.data.accessToken) {
	                            localStorage.setItem("user", JSON.stringify(response.data));
															this.props.history.push(`/dashboard`);
	                        }});
	  }
		//
		onSubmit(e) {
			e.preventDefault();
		}
		render() {
	  return (
			<div className="waj" id="le">
			<div className="container" id="container">
				<div className="form-container sign-up-container">
					<form onSubmit={this.onSubmit.bind(this)}>
						<h1>Create Account</h1>
						<h1 id="couleur" >Join Our Community</h1>
						<input type="text" id="InputUser"  name="user" placeholder="Enter your user" value={this.state.user} onChange={this.onChange.bind(this)}/>
						<input type="email" id="InputEmail"  name="email" placeholder="Enter your email" value={this.state.email} onChange={this.onChange.bind(this)} />
						<input type="password" id="InputPassword"  name="password" placeholder="Enter your password" value={this.state.InputPassword} onChange={this.onChange.bind(this)} />
						<button type="submit">Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form onSubmit={this.onSubmitlogin.bind(this)}>
						<h1>Sign in</h1>
						<input type="email" id="InputEmail"  name="email" placeholder="Enter your email" value={this.state.email} onChange={this.onChange.bind(this)} />
						<input type="password" id="InputPassword"  name="password" placeholder="Enter your password" value={this.state.InputPassword} onChange={this.onChange.bind(this)} />
						<button type="submit">Sign Up</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>Already have an account on Pandemia ? Login to your account right now !</p>
							<button className="ghost" id="signIn" onClick={this.clickHandlerIn.bind(this)}>Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Stranger !</h1>
							<p>Still haven't registered on Pandemia ? Sign up right now !</p>
							<button className="ghost" id="signUp" onClick={this.clickHandler.bind(this)}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>


	    </div>



	  );
}}

export default Login;

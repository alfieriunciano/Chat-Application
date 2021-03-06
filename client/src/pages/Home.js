import React, { Component } from 'react';
import "./home.css";
import { Redirect } from 'react-router-dom';

import API from '../utils/API';
// import { Link } from 'react-router-dom';
import RandomHomeComponent from '../components/RandomHomeComponent';

class Home extends Component {
  state = {
    user : '',
    password : '',
    redirect: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

//style={{textTransform: "none",fontWeight: "normal"}} 
  login = (evt) => {
    evt.preventDefault();
    API.login(this.state)
    .then(res => {
      console.log(res.data)
      this.props.updateUser(res.data);
      this.setState({
        redirect: true
      })
    })
    .catch(err => console.log(err));
    
  }

  render() {
    if(this.state.redirect){
      return <Redirect to="/chat" />
    }else{
    return (
      
      <>
<nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
    <div class="container home-container">
        <a class="navbar-brand" href="#">Chat Now</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about-us">About Us</a>
                </li>
            </ul>

        </div>
    </div>
</nav>

<main class="login-form crossfade">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Log In</div>
                    <div class="card-body">
                        <form action="" method="">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">User ID</label>
                                <div class="col-md-6">
                                    <input type="text" id="email_address" class="form-control" name="user" required autofocus value={this.state.user} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="password" required value={this.state.password} onChange={this.onChange}/> 
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" /><span> Remember Me</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary" onClick={this.login}>
                                    Log In
                                </button>
                                <a href="#" class="btn btn-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

</main>

</>






    );
    }
  }
}

export default Home;

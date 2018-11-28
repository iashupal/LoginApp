import React from 'react';
import './SignIn.css';
import superagent from 'superagent';

// import Axios from 'axios';

export class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            pwd: '',
            users: [],
        };

        // state = {
        //     users: [],
        // };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleUsernameChange(event){

        this.setState({username: event.target.value});
        // let target = e.target;
        // let value = target.type ==='checkbox' ? target.checked : target.value;
        // let name = target.name;

        // this.setState({
        //     [name]: value
        // });
    }
    handlePasswordChange(event){
        this.setState({pwd: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        superagent.get('/server/user.json').then(res => {
            console.log(res);
            this.setState({users: res.data});
        })
        // .send({username: this.state.username, pwd: this.state.pwd})
        // .end((err, res) =>{
        //     if(err) {
        //         this.setState({errorMessage: "Authentication Failed"});
        //         return;
                
                
        //     }
        //     localStorage.setItem('user', JSON.stringify(res.body));
            
        // });
    }

    // componentDidMount(){
    //     Axios.get('./server/user.json').then(res => {
    //         console.log(res);
    //         this.setState({users: res.data});
    //     });
    // }
        
        // onsole.log("This form was submitted with the following data: ");
        // console.log(this.sctate);
        // Axios.post('/signin');
    
    
    render(){
        console.log("state : ",this.state);
    return(
        <div className="signIn">
            <form action="#" className="formFields" onSubmit={this.handleSubmit.bind(this)} noValidate>
                <div className="formField">
                    <label htmlFor="username" className="label">Full Name</label>
                    <input type="text" id="username" className="input" placeholder="Enter your name" name="username" onChange={this.handleUsernameChange.bind(this)} value={this.state.username} required/>
                </div>
                <div className="formField">
                    <label htmlFor="pwd" className="label">Password</label>
                    <input type="password" id="pwd" className="input" placeholder="Enter your password" name="pwd" onChange={this.handlePasswordChange.bind(this)} value ={this.state.pwd} required/>
                </div>
                <div className="formField">
                    
                    <button id="btn" className="btn" name="Submit">SignIn</button>
                </div>
            </form>
        </div>
    )}
}
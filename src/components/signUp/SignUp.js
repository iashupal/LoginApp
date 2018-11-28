import React from 'react';
import './SignUp.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const formValid = formErrors =>{
    let valid = true;
    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
        
    });
    return valid;
}

export class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            email: null,
            pwd: null,
            confirm_pwd: null,
            formErrors: {
                name: "",
                email: "",
                pwd: "",
                confirm_pwd: "",
            }
            
        };
       
    }
    handleSubmit = e=>{
        e.preventDefault();
        if(formValid(this.state.formErrors)){
            console.log(`--submitting--
             Name: ${this.state.name}
             Email: ${this.state.email}
             Pwd: ${this.state.pwd}
             c_pwd: ${this.state.confirm_pwd}
             `);

        }
        else{
            console.error("Form Invalid - Display error message")
        }
    };
    handleChange = e =>{
        e.preventDefault();
        const {username, value} = e.target;
        let formErrors = this.state.formErrors;
        // console.log("Name: ", name);
        // console.log("Value: ",value);
        switch (username){
            case 'name':
                formErrors.name = value.length < 3 ? "minimum 3 character required" : "";
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
                break;
            case 'pwd':    
                formErrors.pwd = value.length < 6 ? "minimum 6 character required" : "";
                break;
            case 'confirm_pwd':    
                formErrors.confirm_pwd = value.length < 6 ? "minimum 6 character required" : "";
                break;
                default:
                break;
        }
        this.setState({formErrors,[username]:value}, ()=>console.log(this.state));
    }
    render(){
        const { formErrors } = this.state;
    return(
        <div className="signUp">
            
            <form action="#" className="formFields" onSubmit={this.handleSubmit} noValidate>
                <div className="formField">
                    <label htmlFor="name" className="label">Full Name</label>
                    <input type="text" id="name" className="input" placeholder="Enter your name" name="name" required onChange={this.handleChange}/>
                    {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                    )}
                </div>
                <div className="formField">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" id="email" className="input" placeholder="Enter your email" name="email" onChange={this.handleChange} required/>
                    {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                    )}
                </div>
                <div className="formField">
                    <label htmlFor="pwd" className="label">Password</label>
                    <input type="password" id="pwd" className="input" placeholder="Enter your password" name="pwd" onChange={this.handleChange} required/>
                    {formErrors.pwd.length > 0 && (
                    <span className="errorMessage">{formErrors.pwd}</span>
                    )}
                </div>
                <div className="formField">
                    <label htmlFor="confirm_pwd" className="label">Confirm Password</label>
                    <input type="password" id="confirm_pwd" className="input" placeholder="Confirm Password" name="confirm_pwd" onChange={this.handleChange} required/>
                    {formErrors.confirm_pwd.length > 0 && (
                    <span className="errorMessage">{formErrors.confirm_pwd}</span>
                    )}
                </div>
                <div className="formField">
                    <label className="checkbox">
                        <input type="checkbox" className="form_chkbox" name="hasAgreed" required/>I agree all statements. 
                    
                    </label>
                </div>

                <div className="formField">
                    
                    <button id="btn" className="btn" name="Submit">SignUp</button>
                </div>

            </form>
        
        </div>
    )}

}
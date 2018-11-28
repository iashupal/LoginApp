const express = require('express');
const path = require('path');
const app = express();
const User = require('./model/user').User;
app.use(express.json());
let users = [];
app.use('/', express.static(path.join(__dirname, 'public')));
app.post('/signup', (req, res) => {
    let message;
    body = req.body;
    let user = new User(body.name, body.email, body.pwd);
    if (user.name && user.email && user.pwd) {
        message = "You are successfully registered!"
    } else {
        message = "You are not registered successfully!"
    }    
    users.push(user);    
    res.send({
        msg: message
    });
});

function login(email, pwd) {    
    found = false;    
    for (let user of users){                
        if(user.email == email && user.pwd == pwd){
            found = true;
            break;
        }
    }    
    return found;
}
app.post('/signin', (req, res) => {
    console.log(req.body)
    let message;
    loginStatus = login(req.body.email, req.body.pwd);
    if (loginStatus) {
        message = "You are logged in succesfully";
    } else {
        message = "Invalid Id and password";
    }
    res.send({
        msg: message
    });
});

app.listen(9999, () => {
    console.log("...Server Started...")
});
var express = require('express')
var path = require('path')
var signup = require('./signup')
var login = require('./login');
const {
    verifyuser
} = require('./login');
var app = express();
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
})
app.post('/signup', (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.pwd;
        const result = signup.registeruser(username, password)
        // res.send('user registered successfully');
        res.sendFile(__dirname + "/public/login.html");
        // res.sendFile(__dirname + "/public/login.html");
    } catch (error) {
        res.send(error);
    }
});
app.post('/login', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.pwd;
        var details = await login.verifyuser(username);
        // console.log(await ans);
        if (await details.length==0) {
            res.send("user doesnot exist");
        }else{
            if (await details[0].username === username && await details[0].password === password) {
                res.sendFile(__dirname + "/public/userhomepage.html")
            }
            else{
                res.send("wrong password");
            }
        }
    } catch (error) {
        res.send(error);
    }
});
app.listen(process.env.PORT || 8080, process.env.IP || '0.0.0.0');
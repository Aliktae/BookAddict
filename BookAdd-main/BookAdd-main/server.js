const express = require("express");
const {router} = require("express/lib/application");
const app = express();
const ejs = require('ejs');
app.use(express.static('public'))
app.use(express.static('images'))
app.set('view engine', 'ejs');

const port = 3002;
const AuthRoute = require ('./router/Auth')


app.get('/about',((req, res) => {
    res.render(__dirname+'/views/pages/about.ejs')
}))

app.get('/',((req, res) => {
    res.render(__dirname + '/views/pages/index')
}))

app.get('/login',((req, res) => {
    res.render(__dirname+'/views/pages/login.ejs')
}))

app.get('/signup',((req, res) => {
    res.render(__dirname+'/views/pages/registration.ejs')
}))

app.get('/readlist',((req, res) => {
    res.render(__dirname+'/views/pages/readlist.ejs')
}))


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`));

app.use ('/Auth',AuthRoute)
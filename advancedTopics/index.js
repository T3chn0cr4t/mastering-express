const { static } = require('express');
const experss = require('express') ; 
const app = experss() ; 
const auth = require('./AuthMiddleWare') ; 
const helmet = require('helmet') // MiddleWare for securing your app from well-known vuln
const morgan = require('morgan'); // MiddleWare for logging requests
const config = require('config');  //RC and npm-config are MiddleWares for configuration files 
const debug = require('debug'); // for deubugging 
const courses = require('./routes/courses'); 
const home = require('./routes/home'); 

app.set('view engine', 'pug'); // Templating Engine (to return html files)

app.use('/api/courses',courses) ; 
app.use('/', home) ; 
// App envirenement
const env = app.get('env') ; // this function use the second one
const env2 = process.env.NODE_ENV ; 

console.log(env , env2);

console.log(config.get("Mail-server"));
// calling third party middleware
app.use(helmet()) ; 

//used for logging http requests  
app.use(morgan('tiny')) ; // simplest format for morgan is tiny 

// calling built-in middleware 

//JSON 
app.use(experss.json()) ; // parse the body of middleware into jason object
//URLENCODED
app.use(experss.urlencoded({extended:true})) // used for forms (your app will be able to read url encoded requests )
//STATIC
app.use(static('flag')) // handle static file (no routes needed)


// calling costum middleware 

app.use(auth); 

// creating costum middleware 

app.use(function(req,res,next){
    console.log("Auth ...") ;
    next();  
});


app.listen(3000);
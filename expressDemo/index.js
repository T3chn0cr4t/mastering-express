const express = require('express') ; 
const app = express(); 
// joi for input validation 
const Joi = require('joi') ;
app.use(express.json()) ; 

const schema =  { topic:Joi.string().min(2).required()} ; 
const courses = [
    {id:1 , topic:'web'}, 
    {id:2 , topic:'crypto'},
    {id:3 , topic:'AI'}]

app.get('/', (req,res)=>{
    res.send("hello world") ; 
}) ; 

app.get('/api/courses', (req,res)=>{
    res.send("courses") ; 
});

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id)) ; 
    if (!course) res.status(404).send("the course not found") 
    res.send(course) ; 
});

// implementing validation with post
app.post('/api/courses',(req,res) =>{
   const result = Joi.valid(req.body,schema); 
   if (result.error) res.status(400).send(result.error.details[0].message)
}) ; 

app.put('/api/courses/:id',(req,res)=>{
    const course = Joi.valid(req.body,schema); 
    if (course.error) res.status(400).send(course.error.details[0].message) ; 

    const exist = courses.find(c=>c.id===parseInt(req.body.id)) ; 
    if (!exist) res.status(404).send("course not found") ; 

    course.topic = req.body.topic
    res.send(req.body)
 })
console.log("listening on 3000 ...");
app.listen(process.env.PORT) 
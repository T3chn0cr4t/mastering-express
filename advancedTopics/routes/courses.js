const experss = require('express') ; 
const router = experss.Router() ; 

const courses = [
    {id:1 , topic:'web'}, 
    {id:2 , topic:'crypto'},
    {id:3 , topic:'AI'}]

router.get('/', (req,res)=>{
    res.send(courses) ; 
});

module.exports = router ; 
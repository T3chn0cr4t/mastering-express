const experss = require('express') ; 
const router = experss.Router() ; 


router.get('/', (req,res)=>{
    res.send("home page") ; 
});

module.exports = router ; 
const mongoose = require('mongoose') ; 

//Connecting to playground DB 
mongoose.connect('mongodb://localhost/playground')
    .then(()=>console.log('connected to mongo ..'))
    .catch(err =>console.log(err) )

// Schema 
const courseSchema = new mongoose.Schema({
    name: String , 
    author : String , 
    tags : [String] ,
    date : {type:Date , default:Date.now}, 
    isPublished :{type:Boolean , default:false}
}); 
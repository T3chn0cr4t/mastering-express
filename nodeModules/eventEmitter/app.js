const EventEmitter = require('events') ; 
const Logger =  require('./logger') ; 

logger = new Logger() ; 

//register a listner 
logger.on('messageLogged', function (args) {
    console.log(args);
}) 

logger.log("message")



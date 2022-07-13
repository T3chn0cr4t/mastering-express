const EventEmitter = require('events') ;
 
class Logger extends EventEmitter {
    log(msg){
        console.log(msg);
        this.emit("messageLogged", "hello")
    }
}

module.exports = Logger ; 

console.log('Before');
getUser(1, function(id,username){
    getRepos('moncif',function (repos) {
        console.log(repos);
    }) ; 
}); 

console.log('After');


function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading from a database');
        callback({id:id , username:'moncif'}); 
    },2000 ) ; 
    
}
function getRepos(username,callback){
    setTimeout(()=>{
        console.log('Calling API');
        callback(['repo1','repo2','repo3']) ; 
    },2000 ) ; 
    
}


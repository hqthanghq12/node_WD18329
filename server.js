const http = require('http');
const server = http.createServer(function(req, res){
    console.log(req);
    if(req.url == "/"){
        res.write("<h1>HIHI haha</h1>")
    }
})
server.listen(8080, function(){
    console.log(123);
} )
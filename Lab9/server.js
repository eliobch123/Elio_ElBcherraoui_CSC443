let express= require('express');
let app= express();
let bodyParser = require('body-parser');
let fs= require("fs");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "content-type");
    next();
});

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
        extended: true
      })); 

app.use(express.static('public'));

app.post("/",function(req,res){
    let name= req.body.name;
    let desc= req.body.description;
    let url= req.body.url;
    let gender=req.body.gender;
    let birthday=req.body.birthday;
    let color=req.body.color;

    let htmlString=`<html><body><h1>${name}</h1><p>${desc}</p><img src="${url}"><p>${gender}</p><p>${birthday}</p><p>${color}</p></body></html>`;
    fs.writeFile(`./public/${name}.html`,htmlString,function(){});
    
    res.end(htmlString);
    
      
})
let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log(host + ": "+port);
 })

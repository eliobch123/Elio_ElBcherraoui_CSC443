var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const ejs= require("ejs");
let webSocket= require("ws");
const { v4: uuidv4 } = require('uuid');
var cookieParser = require('cookie-parser')
const url1 = require('url'); 

const globalUser=[];
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
        extended: true
      })); 
app.use(cookieParser())


app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/homepage.html");
})



app.post("/adduser",function(req,res){


	let fname = req.body.fname;
	let lname = req.body.lname;
	let gender= req.body.gender;
	let desc = req.body.desc;

    
     let newid=uuidv4();
    let newObj={};
    newObj.id=newid;
    newObj.fname=fname;
    newObj.lname=lname;
    newObj.gender=gender;
    newObj.desc=desc;

    globalUser.push(newObj)


    res.redirect(url1.format({
        pathname:"/admin",
        query: {
            "id":newid,
           "fname": fname,
           "lname": lname
            "gender": gender,
           "desc": desc,
         }
      }))
})

app.get("/admin",function(req,res){


    let UserFname= req.query.fname;
    let UserLname= req.query.lname;
    let UserGender= req.query.gender;
    let UserDesc= req.query.desc;


    

    ejs.renderFile(__dirname+"/public/admin.ejs",{id:thisid,fname:UserFnam, lname:UserLname , gender: UserGender , desc: UserDesc},function(e, dt) {
        res.send(dt);
      });
})



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening on 8081");
 })

let ws= new webSocket.Server({port:8080});

ws.on("connection",function(thisWs){
    
    thisWs.on("message",function(msg){
        let splitMsg= msg.split(":");

        if(splitMsg[0]=="connect") 
        {
            let userid= splitMsg[1];
            let username= splitMsg[2];

            globalChat.forEach((val)=>{
                if(val.username==username && val.id == userid)
                {
                    val.websocket= thisWs;
                }
            })

            globalChat.forEach((val)=>{
                if(val.username!=username && val.id != userid)
                {
                    val.websocket.send("newconx:"+username);
                    thisWs.send("newconx:"+val.username)
                }
            })
            
        }
    })
})

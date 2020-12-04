let wsUrl= "ws://localhost:8080";
let connection= new WebSocket(wsUrl);

connection.onopen=function(){
    console.log("connected");
      connection.send(`connect:${document.querySelector("#id_user").innerText}`)
}
connection.onmessage=function(e){
    let msg= e.data;
    let splitMsg= msg.split(":");
    if(splitMsg[0]=="newconx")
    {
        let newLi= document.createElement("li");
        newLi1.innerText=splitMsg[1];   
        newLi2.innerText=splitMsg[2];  
        newLi3.innerText=splitMsg[3];   
        newLi4.innerText=splitMsg[4];   
           let line= document.createElement("hr");

        newLi1.appendChild(document.createTextNode("First Name"));
        document.querySelector("#AdminDisplay ul").appendChild(newLi1);
       
        newLi2.appendChild(document.createTextNode("Last Name"));
        document.querySelector("#AdminDisplay ul").appendChild(newLi2);
        
        newLi3.appendChild(document.createTextNode("Gender"));
        document.querySelector("#AdminDisplay ul").appendChild(newLi3);
         
        newLi4.appendChild(document.createTextNode("Description"));
        document.querySelector("#AdminDisplay ul").appendChild(newLi4);


        document.querySelector("#AdminDisplay ul").appendChild(line);

         

         
    }
}

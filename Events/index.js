 //We are creating an event where we can creaate , fire and listen
 const EventEmiiter= require('events');// We are creating a class EventEmitter
 const event= new EventEmiiter();
// 1. Creating an event
 event.on("What's_my_name",()=>{ //.on is used inorder to listen to the called 
    //event
     console.log("Youganjan Sarki");
 });
 event.emit("What's_my_name"); //Emit is used to create an event

 //Creating multiple events
 event.on("What's_my_name",()=>{ 
     console.log("Youganjan ");
 });
 event.on("What's_my_name",()=>{ 
    console.log("Sarki");
});
event.on("What's_my_name",()=>{ 
    console.log("Yay...");
});
event.emit("What's_my_name"); // So, with it we can call several 
 //events even with the same event

//3.Passing down the parameter
event.on("Pageinfo",(sc,mess)=>{
    console.log(`The status code is ${sc} , so its ${mess}`);
});
event.emit("Pageinfo",200,"Nice");
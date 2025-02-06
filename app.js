

const hourElement=document.getElementById("hrs")
const minuteElement=document.getElementById("mins")
const secondElement=document.getElementById("secs")



setInterval(()=>{
    let currentTime= new Date();

    hourElement.innerHTML=(currentTime.getHours()<10? "0": "" ) + currentTime.getHours() ;
    minuteElement.innerHTML=(currentTime.getMinutes()<10? "0": "" ) + currentTime.getMinutes();
    secondElement.innerHTML=(currentTime.getSeconds()<10? "0": "" ) + currentTime.getSeconds() ;
    
    
} ,1000)






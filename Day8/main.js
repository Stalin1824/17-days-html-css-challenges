var payment  = document.querySelector(".payment-wrapper")
let toggel = false

// UI

function UI(){

UI.prototype.addcontact = function(e){
    if(toggel && e.target.className ==="addContact"){
        e.target.innerText ="Added"
        e.target.style.color = "red"
        e.target.style.textAlign = "center"  
        e.target.style.backgroundColor = "transparent"
        e.target.style.border = "1px solid rgb(237, 74, 85)"
        e.target.style.transition = "1s"
            
       }
       
     else if(e.target.className==="addContact"){
        e.target.innerText ="Add contact"
        e.target.style.color = "white"
        e.target.style.backgroundColor = "rgb(237, 74, 85)"
        e.target.style.textAlign = "start"  
        e.target.style.transition = "1s"
   
        
   
     } 

}

}


// add event
payment.addEventListener("click",(e)=>{
    toggel =!toggel 
   const ui = new UI()
    ui.addcontact(e)
  
   

})
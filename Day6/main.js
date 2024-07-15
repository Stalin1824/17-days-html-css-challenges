var joined  = document.querySelector(".joined")
var post  = document.querySelector(".post")
var textarea =document.querySelector(".textarea")

let  joinToggel = true
var number = 1

function UI(){

UI.prototype.toggel=function(){
  if(joinToggel){
       joined.innerText = "Join"
       joined.style.backgroundColor = "black"
       joined.style.color = "white"
    }else{
       joined.innerText = "Joined"
       joined.style.backgroundColor = "transparent"
       joined.style.color = "black"
      
}
   

}

UI.prototype.createTextarea = function(){
     var text = document.createElement("div")
   
   text.className = "adding"
    text.innerHTML =
        `<div class="dashboard">
          <span>Post${number} </span>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <textarea class="area"></textarea>  
        ` 
     textarea.appendChild(text)     
    
}

}


// join event

joined.addEventListener("click",()=>{
    const ui = new UI()
    ui.toggel()   
    joinToggel=!joinToggel
})


// create post event
post.addEventListener("click",()=>{
    const ui = new UI()
    ui.createTextarea()
    number =number +1  

})

// x-mark event

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".textarea").addEventListener("click",(e)=>{
        if(e.target.className === "fa-solid fa-xmark"){
             document.querySelector(".adding").remove()  
        }
      
})
})

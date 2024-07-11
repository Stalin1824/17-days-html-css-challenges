// UI

function UI(){

  

UI.prototype.removeCheck = function(e){
    if(!e.target.closest(".photos")){
        var check = document.querySelectorAll(".check")
        check.forEach((e)=>e.remove()) 
      }

}

UI.prototype.closeBtn= function(){
     var collection   =   document.querySelector(".collection")
         collection.style.transform = "scale(0)"
         collection.style.transition = "2s"
    }

}



// event for close
var   xmark = document.querySelector(".ri-close-line")       
xmark.addEventListener("click",()=>{
    const ui = new UI()
    ui.closeBtn()               
})



// event for add checkbox
  
const photo = document.querySelectorAll(".photo")
photo.forEach((photo)=>{
photo.addEventListener("click",()=>{
  var check = document.querySelectorAll(".check")
  check.forEach((e)=>e.remove())  
    var div = document.createElement("div")
       div.className = "check"
       div.innerHTML = `<i class="ri-checkbox-circle-line display-4"></i>`
       
     photo.appendChild(div)    
  })


})



// remove checkbox

document.body.addEventListener("click",(e)=>{
    const ui = new UI()
     ui.removeCheck(e)


})
 



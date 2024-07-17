// class="fa-solid fa-circle" 
// class="fa-solid fa-square"

var customize = document.querySelectorAll(".customize-wrapper")
var add = document.querySelectorAll(".add")
var dashboard = document.querySelectorAll(".dashboard")

customize[0].addEventListener("click",(e)=>{
   if(e.target.className === "add"){
             add.forEach((e)=>{
                 e.className ="add"
             })        
        e.target.className="add fa-solid fa-circle"
   console.log(add)

   }  


})

let a = false
customize[0].addEventListener("click",(e)=>{
    a=!a
 if(e.target.className === "alert" && a ){
     e.target.className="alert fa-solid fa-square"
 }else if(e.target.className === "alert fa-solid fa-square" && a===false){

     e.target.className = "alert" 
 }

  

})

let b = true
customize[0].addEventListener("click",(e)=>{
  b =!b
if(e.target.className === "xmark fa-solid fa-ellipsis" && b){
document.querySelector(".dashboard").style.display = "flex"     

}else if ((e.target.className === "xmark fa-solid fa-ellipsis" && b ===false)){
var el = document.querySelector(".dashboard")
el.style.display = "none"     

}


})


console.log(dashboard)

dashboard[0].addEventListener("click",(e)=>{
if(e.target.className === "list"){
    dashboard[0].style.display = "none"
}

})
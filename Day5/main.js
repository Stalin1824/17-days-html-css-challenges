By using ES5
// toggel functionality 

let a =true;
function UI(){

  UI.prototype.toggle= function(){
 const shadow = document.querySelector(".shadow") 
    if(a){
      shadow.style.transform ="scale(0)"
      shadow.style.transition ="1s"
       
    }else{
        shadow.style.transform ="scale(1)"
        shadow.style.transition ="1s"
    
    }

}

}

// event fa-bell
document.querySelector(".fa-bell"),addEventListener(("click"),()=>{
   const  ui =new UI()
      ui.toggle()
      a=!a

})





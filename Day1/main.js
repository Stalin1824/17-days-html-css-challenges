var footSection = document.querySelector(".foot-section")
var isShow  = true
footSection.addEventListener("click",(e)=>{
    if(e.target.className==="click  d-md-none fa-solid fa-arrow-right " && isShow){
        e.target.style.transform="rotate(90deg)"
        e.target.parentElement.parentElement.children[1].style.display="block" 
        isShow=false
    }else{
        e.target.style.transform="rotate(0deg)"
        e.target.parentElement.parentElement.children[1].style.display="none" 
        isShow = true
    }

})
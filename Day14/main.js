// 3dot vertical
var dot_vertical = document.querySelector(".groceries-wrapper>div:nth-child(1) > i")

// togel element select 
var deleteShow = document.querySelector(".groceries-wrapper>div:nth-child(1) > div")

//  check btn
var toShow = document.querySelectorAll(".groceries-wrapper")

// completed count
var completed = document.querySelector(".groceries-wrapper > div:nth-child(4)")

// add btn
var plus = document.querySelector(".plus")


var clearAll = document.querySelector(".clearall")

// complete btn
var completedDelete = document.querySelector(".groceries-wrapper>div:nth-child(1) > div > span:nth-child(2)")

// delete btn
var deleteAll = document.querySelector(".groceries-wrapper>div:nth-child(1) > div > span:nth-child(1)")

// three dot event
var change = false
dot_vertical.addEventListener("click", () => {

    change = !change


    if (true) {
        deleteShow.style.display = "none";

    }
    if (change === false) {
        deleteShow.style.display = "flex";
    }
})
let dell;
let s = 0

toShow[0].addEventListener("click", (e) => {
    if (e.target.className === "checked") {
        let a = e.target.parentElement
        a.className = "add"
        a.children[0].className = "toadd"
        e.target.parentElement.remove()
        completed.children[0].innerText = `COMPLETED(${s += 1})`;
        clearAll.appendChild(a)
        dell = document.querySelectorAll(".add")



    }
})






// completed delete

completedDelete.addEventListener("click", () => {


    dell.forEach((el) => {
        el.remove()
    })

    completed.children[0].innerText = "COMPLETED (0)"
    deleteShow.style.display = "none";
    s = 0

})


let p = document.querySelectorAll(".useradd > div")


// toadd

plus.addEventListener("click", () => {

    var div = document.createElement("div")

    div.innerHTML = `
                 <h5 class="checked"><i class="fas fa-check" style="color:#042e76; padding: 3px;"></i></h5>
                                    <input type="text" class="userVal">
             `
            
    document.querySelector(".useradd").appendChild(div)
    p = document.querySelectorAll(".useradd > div")
    document.querySelector(".userVal").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            let userVal = e.target.value
            var span = document.createElement("span")
            span.innerText = userVal
            var ne = document.querySelector(".userVal")
            document.querySelector(".userVal").parentNode.replaceChild(span, ne)
        }
    })






})




// deleteall event

deleteAll.addEventListener("click", () => {
    p.forEach((el) => {
        el.remove()
    })

    dell.forEach((el) => {
        el.remove()
    })
    completed.children[0].innerText = "COMPLETED (0)"
    deleteShow.style.display = "none";
})




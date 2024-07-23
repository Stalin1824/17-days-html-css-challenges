var subscribe = document.querySelector(".basic-wrapper > a")
var month = document.querySelectorAll(".basic-wrapper > div:nth-child(3)")
var change = document.querySelector(".basic-wrapper > div:nth-child(2)")
var bronze_wrapper = document.querySelector(".bronze-wrapper")
var month_all = document.querySelectorAll(".month")

let store;

// delete function
function none(e) {

    return e.target.parentElement.style.display = "none"
}

// add function

function add(e) {

    return e.target.parentElement.style.display = "flex"
}


// create function

function create() {
    let s;
    let t;
    switch (store) {
        case 10:
            s = "BASIC"
            t = 10
            break;
        case 25:
            s = "BRONZE"
            t = 25
            break;
        case 50:
            s = "SILVER"
            t = 50
            break;
        case 100:
            s = "GOLD"
            t = 100
            break;
    }


    bronze_wrapper.innerHTML = `
            <i class="far fa-times-circle" style="color: #051d48;"></i>
            <p class="success">
             <span>You have successfully subscribed to</span>
             <span>the <span>${s}</span> plan!</span>
           </p>
           <p class="downloads">You will get <span>${t}</span> downloads per month.</p>
                  `

}

// subscribe button event

let ys;
subscribe.addEventListener("click", (e) => {
    ys = e;
    none(e)
    create()

})



//  xmark event
var xmark = document.querySelector(".bronze-wrapper")

xmark.addEventListener("click", (e) => {
    if (e.target.className === "far fa-times-circle") {
        add(ys)

    }
})


// month event
month.forEach((a) => {

    a.addEventListener("click", (e) => {
        month_all.forEach((e) => {
            e.classList.replace("broke", "month")
        })
        store = Number(e.target.innerText);

        switch (store) {
            case 10:
                change.children[0].innerText = `$${25}`
                break;
            case 25:
                change.children[0].innerText = `$${30}`
                break;
            case 50:
                change.children[0].innerText = `$${40}`
                break;
            case 100:
                change.children[0].innerText = `$${50}`
                break;
        }
        e.target.className = "broke"
    })
})





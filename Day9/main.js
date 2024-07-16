var paymentWrapper = document.querySelectorAll(".payment-wrapper")
var add = document.querySelectorAll(".fa-regular")


// UI
function UI() {

    UI.prototype.check = function (e) {
        if (e.target.className === "fa-regular fa-circle") {
            add.forEach((i) => {
                i.style.border = ""
                i.style.borderRadius = ""
            })
            e.target.style.border = "5px solid rgb(42, 50, 125)"
            e.target.style.borderRadius = "30px"
        }

    }


}


// check event
paymentWrapper[0].addEventListener("click", (e) => {
    const ui = new UI()
    ui.check(e)

})
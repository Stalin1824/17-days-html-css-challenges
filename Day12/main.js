var container = document.querySelector(".container")
var statistics_wrapper = document.querySelectorAll(".check")


function UI() {

    UI.prototype.show = function (e) {
        var val = e.target.value
        var userVal = val.toUpperCase()

        let set;

        statistics_wrapper.forEach((el) => {
            set = el.innerText
            let z = set.toUpperCase()
            if (z.includes(userVal)) {
                (el.parentElement.parentElement.parentElement.style.display = "flex")
            }
            else if (!(z.includes(userVal))) {
                (el.parentElement.parentElement.parentElement.style.display = "none")
            }
        })

    }


    UI.prototype.clear = function (e) {

        let a = (e.target.previousSibling)
        a.value = ""
        statistics_wrapper.forEach((el) => {

            (el.parentElement.parentElement.parentElement.style.display = "flex")
        })
    }

}


// Enter event
const ui = new UI
container.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        ui.show(e)

    }

})

// Backspace event
container.addEventListener("keydown", (e) => {
    let len = e.target.value
    if (e.key === "Backspace" && len.length <= 1) {
        console.log(true)
        statistics_wrapper.forEach((el) => {

            (el.parentElement.parentElement.parentElement.style.display = "flex")
        })
    }

})

// clear event
container.addEventListener("click", (e) => {
    const ui = new UI
    ui.clear(e)
})







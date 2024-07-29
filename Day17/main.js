var bgColor = document.querySelectorAll(".blue")
var inputValue = document.querySelector(".user-wrapper>div:nth-child(2)>div:nth-child(1)>input")
var serachBar = document.querySelectorAll(".name")


// Card
inputValue.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        serachBar.forEach((el) => {
            let s = el.children[0].innerText.toUpperCase()
            let y = inputValue.value.toUpperCase()
            if (s.includes(y)) {
                el.children[0].parentElement.parentElement.style.display = "flex"
            }
            else if (!el.children[0].innerText.includes(inputValue.value)) {
                el.children[0].parentElement.parentElement.style.display = "none"
            }
        })
    } else if (e.key === "Backspace") {
        let s = inputValue.value
        if (s.length === 0) {

            serachBar.forEach((el) => {
                el.children[0].parentElement.parentElement.style.display = "flex"
            })
        }

    }


})


// Mount to add backgroundColor
var second = document.querySelector(".user-wrapper>div:nth-child(2)>div:nth-child(2)>a:nth-child(2)")
second.style.backgroundColor = "skyblue"


bgColor.forEach((el) => {
    el.addEventListener("click", (e) => {
        document.querySelectorAll(".blue").forEach((el) => el.style.backgroundColor = "white")
        e.target.style.backgroundColor = "skyblue"

    })
})





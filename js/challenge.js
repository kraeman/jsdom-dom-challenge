const minus = () => document.querySelector("#minus")
const plus = () => document.querySelector("#plus")
const heart = () => document.querySelector("#heart")
const pause = () => document.querySelector("#pause")
const form = () => document.querySelector("#comment-form")
const submit = () => document.querySelector("#submit")
const inputField = () => document.querySelector("#comment-input")
const listItems = () => document.querySelector("#list")
const likes = () => document.querySelector(".likes")
const counterField = () => document.querySelector("#counter")
const objectOfLikes = {}

const flow = () => setInterval(isRunning, 1000)


const isRunning = () => {
    if (pause().innerHTML === " pause ") {
        increaseTimer()
    }
}

const decreaseTimer = () => {
    parseInt(counterField().innerText--)
}

const increaseTimer = () => {
    parseInt(counterField().innerText++)
}

const addLike = () => {
    const c = counterField().innerText
    if (!objectOfLikes[c]) {
        objectOfLikes[c] = 1
    } else {
        objectOfLikes[c] += 1
    }
    if (document.getElementById(`${c}`)) {
        var i = document.getElementById(`${c}`)
        i.remove()
    }
    var li = document.createElement("li")
    li.setAttribute("id", `${c}`)
    if (objectOfLikes[c] == 1) {
        li.innerText = `${c} has been liked ${objectOfLikes[counterField().innerText]} time`
    } else {
        li.innerText = `${c} has been liked ${objectOfLikes[counterField().innerText]} times`
    }
    likes().appendChild(li)
}

const stopStart = () => {
    if (pause().innerText == 'pause') {
        minus().disabled = true
        plus().disabled = true
        heart().disabled = true
        pause().innerText = 'start'
    } else {
        minus().disabled = false
        plus().disabled = false
        heart().disabled = false
        pause().innerText = ' pause '
    }
}

const addComment = () => {
    
    const words = inputField().value
    var h5 = document.createElement("h5")
    h5.innerText = words
    listItems().appendChild(h5)
}

document.addEventListener("DOMContentLoaded", () => {
    flow()
    minus().addEventListener("click", decreaseTimer)
    plus().addEventListener("click", increaseTimer)
    heart().addEventListener("click", addLike)
    pause().addEventListener("click", stopStart)
    submit().addEventListener("click", function(event) {
        addComment()
        event.preventDefault()
    })
})


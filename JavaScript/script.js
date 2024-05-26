// Const declared//
const inputItems = document.querySelector(".input-items")
const buttonAdd = document.querySelector(".to-add")
const listItems = document.querySelector("ul")
const cleanItems = document.querySelector("#list-container button")

// Function to add items to a list with a mouse click//
function add(){
    const ulItems = '<li>' + inputItems.value + '</li>'
    listItems.innerHTML += `${ulItems}`
    inputItems.value = ""
    inputItems.focus()
}

// Function created to remove items //
function remove(){
    listItems.innerHTML = "Itens"
}

// Event to add items to a list //
buttonAdd.addEventListener('click', () =>{
    add()
})

// Function created to add items with "Enter" key//
document.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        const enterKey = document.querySelector(".to-add")
        enterKey.click()
    }
})

// Event to clear all items //
cleanItems.addEventListener("click", () =>{
    remove()
})

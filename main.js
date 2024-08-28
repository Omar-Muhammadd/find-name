
var names = prompt("Enter your name: ")

document.body.innerHTML = `
    <img src="assets/1.gif" id="fire">
    <h1 id="h1Name">${names}</h1>

    `

var fire = document.getElementById("fire")

document.addEventListener('mousemove', function(e){
    fire.style.position = "absolute"
    fire.style.left = e.clientX-50 + "px"
    fire.style.top = e.clientY-5 + "px"
})



var nameRun = document.getElementById("h1Name")

function run(){
    var X = Math.random() * 200 
    var Y = Math.random() * 200

    nameRun.style.transform = `translate(${X}px,${Y}px)`
 }

nameRun.addEventListener('mouseenter',() => {
    setTimeout(run, 500)
} )

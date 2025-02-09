console.log('Document Object Model')

// Selecting Elements

//Selecting By Id
const elementById=document.getElementById("root")
console.log(elementById)//hi#root
//Selecting By class
const elementByClass=document.getElementsByClassName("html")
console.log(elementByClass[1].innerHTML)//This is a paragraph.
//Selecting By tag name
const elementByTag=document.getElementsByTagName('div')
console.log(elementByTag[0].innerHTML)//Hello

//Selecting using querySelector
const firstMatch=document.querySelector(".html")
console.log(firstMatch)//<div class="html">Hello</div>

//Selecting using querySelectorAll
const all=document.querySelectorAll("html")
console.log(all)//NodeList [html] 0: html
//length: 1

//Modifying Elements
//changing the text of an element
document.getElementById("root").innerHTML="Hello DOM!"//Hello DOM!

//changing the HTML content
document.getElementById("root").innerHTML="<h2>updated content</h2"//updated content

//changing the style
document.getElementById("root").style.color="blue"//color changed
document.getElementById("root").style.backgroundColor = "lightgray";
// Creating & Appending Elements
const newPara=document.createElement("p");
//add text to paragraph
newPara.textContent="this is a dynamically added paragraph";
//Append to an existing element
document.getElementById("root").appendChild(newPara)//this is a dynamically added paragraph

//👉 Removing Elements
//Selecting the element to be removed
const elementRemove=document.getElementById("root")
elementRemove.remove()//removed

//Event Listeners (Handling Clicks, Hover, Input, etc.)
//Selecting a button
const button=document.getElementById("myButton")
//adding a click event listener
button.addEventListener("click",function(){
    alert("Button Clicked!")
});
const hover=document.getElementById("hover")
hover.addEventListener("mouseover",function(){
    hover.style.backgroundColor='pink'
})
hover.addEventListener("mouseout",function(){
    hover.style.backgroundColor='green'
})
hover.addEventListener("dblclick",function(){
    alert("double cLICKED")
})
//3. Handling Keyboard Events (Key Press, Key Up, Key Down)
const input=document.getElementById("myInput")
const output=document.getElementById("output")

input.addEventListener("keydown",function(){
    output.textContent=`you pressed ${event.key}`
})
//Handling Input Events (Live Text Updates)
const livetxt=document.getElementById("livetxt")
const liveout=document.getElementById("liveout")
livetxt.addEventListener("input",function(){
    liveout.textContent=`live Output: ${livetxt.value}`
})

//Handling Form Submission 
const form1=document.getElementById("myForm")
const give=document.getElementById("give")
form1.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted")
})

console.log(1+"2"-3)
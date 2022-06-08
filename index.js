// Write your code here!
var element = document.getElementById("main");
element.parentNode.removeChild(element);

let newHeader = document.createElement("h1");
newHeader.id = 'victory';

newHeader.textContent = 'Terell is the champion';

// const h1 = <h1>victory</h1>

// newHeader.innerHTML = "<h1>victory</h1>";
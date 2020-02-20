//////////////////// Task One

let tagLine = document.getElementById("tag-line");
let collect = tagLine.innerText + "\n--------------------------------------------\n";

let divs = document.querySelector(".bg-main-content");
let headings = divs.getElementsByTagName("h2");

for (var i = 0; i < headings.length; i++) {
	collect = collect + " \n " + headings[i].innerText;
}

window.alert(collect);


//////////////////// Task Two

let outer_div = document.querySelector(".bg-main-content");
let when_to_launch = outer_div.getElementsByTagName("h2");
collect = when_to_launch[12].innerText;
collect += "\n-----------------------------------\n";

let divss = document.querySelector(".bg-main-content").children;
let div_13 = divss[12].getElementsByTagName("p");


for (var i = 0; i < div_13.length; i++) {
	collect += div_13[i].innerText + "\n\n"; 
}
window.alert(collect);

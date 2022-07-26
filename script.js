let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

card1.onclick = function(){
    card1.style.transform = "rotate(0deg)";
    card2.style.transform = "rotate(40deg)";
    card3.style.transform = "rotate(50deg)";
    card4.style.transform = "rotate(60deg)";
    card5.style.transform = "rotate(70deg)";
    card6.style.transform = "rotate(80deg)";
}
card2.onclick = function(){
    card1.style.transform = "rotate(-30deg)";
    card2.style.transform = "rotate(0deg)";
    card3.style.transform = "rotate(50deg)";
    card4.style.transform = "rotate(60deg)";
    card5.style.transform = "rotate(70deg)";
    card6.style.transform = "rotate(80deg)";
}
card3.onclick = function(){
    card1.style.transform = "rotate(-30deg)";
    card2.style.transform = "rotate(-20deg)";
    card3.style.transform = "rotate(0deg)";
    card4.style.transform = "rotate(60deg)";
    card5.style.transform = "rotate(70deg)";
    card6.style.transform = "rotate(80deg)";
}
card4.onclick = function(){
    card1.style.transform = "rotate(-30deg)";
    card2.style.transform = "rotate(-20deg)";
    card3.style.transform = "rotate(-10deg)";
    card4.style.transform = "rotate(0deg)";
    card5.style.transform = "rotate(70deg)";
    card6.style.transform = "rotate(80deg)";
}
card5.onclick = function(){
    card1.style.transform = "rotate(-40deg)";
    card2.style.transform = "rotate(-30deg)";
    card3.style.transform = "rotate(-20deg)";
    card4.style.transform = "rotate(-10deg)";
    card5.style.transform = "rotate(0deg)";
    card6.style.transform = "rotate(80deg)";
}
card6.onclick = function(){
    card1.style.transform = "rotate(-50deg)";
    card2.style.transform = "rotate(-40deg)";
    card3.style.transform = "rotate(-30deg)";
    card4.style.transform = "rotate(-20deg)";
    card5.style.transform = "rotate(-10deg)";
    card6.style.transform = "rotate(0deg)";
}
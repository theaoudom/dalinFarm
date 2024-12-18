var answer = document.querySelector("#answer");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");

var clk = document.querySelector(".clk");
var clk2 = document.querySelector(".clk2");
var clk3 = document.querySelector(".clk3");

var clkicon = document.querySelector(".clkicon");
var clkicon2 = document.querySelector(".clkicon2");
var clkicon3 = document.querySelector(".clkicon3");

clk.addEventListener("click",function(){
    answer.style.height="100px";
    answer.style.display="block";
    answer.transition="0.6s";
    answer3.style.display="none";
    answer2.style.display="none";
    clkicon.style.background="#e9da5d"
    clkicon3.style.background="white"
    clkicon2.style.background="white"
})
clk2.addEventListener("click",function(){
    answer.style.display="none";
    answer3.style.display="none";
    answer2.style.height="130px";
    answer2.style.display="block";
    answer2.transition="0.6s";
    clkicon2.style.background="#e9da5d"
    clkicon.style.background="white"
    clkicon3.style.background="white"
})
clk3.addEventListener("click",function(){
    answer.style.display="none";
    answer2.style.display="none";
    answer3.style.height="150px";
    answer3.style.display="block";
    answer3.transition="0.6s";
    clkicon3.style.background="#e9da5d"
    clkicon.style.background="white"
    clkicon2.style.background="white"
})

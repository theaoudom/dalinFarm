window.addEventListener("scroll",function(){
    var menu =document.querySelector("#container");
    if(scrollY >250){
        menu.style.top="00px";
    }
    else{
        menu.style.top="-100px";
    }
})

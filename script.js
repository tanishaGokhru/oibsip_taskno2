window.onscroll=function()
{myFunction()};
var navBar = 
document.getElementById("navBar");
var sticky = navBar.offsetTop;
function myFunction() {
    if(window.padeYOffset >=sticky)
    {
        navBar.classList.add("sticky")
    }else
    {
        navBar.classList.remove("sticky")
        ;
    }
}  
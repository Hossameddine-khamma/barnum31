document.querySelector(".info1").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay1").style.opacity="0.9";
    document.querySelector(".text1").style.display="none";
});
document.querySelector(".info2").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay2").style.opacity="0.9";
    document.querySelector(".text2").style.display="none";
});
document.querySelector(".info3").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay3").style.opacity="0.9";
    document.querySelector(".text3").style.display="none";
});
document.querySelector(".info4").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay4").style.opacity="0.9";
    document.querySelector(".text4").style.display="none";
});
document.querySelector(".info5").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay5").style.opacity="0.9";
    document.querySelector(".text5").style.display="none";
});
document.querySelector(".info6").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay6").style.opacity="0.9";
    document.querySelector(".text6").style.display="none";
});
function resetDisplay(){
    document.querySelector(".overlay1").style.opacity="0";
    document.querySelector(".overlay2").style.opacity="0";
    document.querySelector(".overlay3").style.opacity="0";
    document.querySelector(".overlay4").style.opacity="0";
    document.querySelector(".overlay5").style.opacity="0";
    document.querySelector(".overlay6").style.opacity="0";
    document.querySelector(".text1").style.display="block";
    document.querySelector(".text2").style.display="block";
    document.querySelector(".text3").style.display="block";
    document.querySelector(".text4").style.display="block";
    document.querySelector(".text5").style.display="block";
    document.querySelector(".text6").style.display="block";
}
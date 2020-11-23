document.querySelector(".info1").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay1").style.opacity="0.9";
    document.querySelector(".info1Text").style.display="none";
});
document.querySelector(".info2").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay2").style.opacity="0.9";
    document.querySelector(".info2Text").style.display="none";
});
document.querySelector(".info3").addEventListener("click", (displayOverlay1)=>{
    resetDisplay()
    document.querySelector(".overlay3").style.opacity="0.9";
    document.querySelector(".info3Text").style.display="none";
});
function resetDisplay(){
    document.querySelector(".overlay1").style.opacity="0";
    document.querySelector(".overlay2").style.opacity="0";
    document.querySelector(".overlay3").style.opacity="0";
    document.querySelector(".info1Text").style.display="block";
    document.querySelector(".info2Text").style.display="block";
    document.querySelector(".info3Text").style.display="block";
}
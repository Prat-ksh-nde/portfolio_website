var tabcontents=document.getElementsByClassName("tab-contents");
    var tablinks=document.getElementsByClassName("tab-links");
    function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
   }


var me=document.getElementById("me");

function openmenu(){
    me.style.right="0";
}
function closemenu(){
    me.style.right="-200px"
}
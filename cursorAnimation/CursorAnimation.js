const cursor=document.querySelector(".cursor");
//follow the cursor on mouse move
var timeout;
document.addEventListener("mousemove", (e)=>{
    let x=e.pageX;
    let y=e.pageY;
    cursor.style.top=y+"px";
    cursor.style.left=x+"px";
    cursor.style.display="block";
    /*
    function mouseStopped(){
        cursor.style.display="none";
    }
    clearTimeout(timeout);
    timeout=setTimeout(mouseStopped,100);
    */
});
document.addEventListener("mouseout", (e)=>{

    cursor.style.display="none";
});
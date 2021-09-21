const slide=[ "apple.jpg","bat.jpg","cat.jpg"];
let i=0;
document.getElementById("pre").addEventListener("click", funpre);
document.getElementById("next").addEventListener("click", funnext);

console.log(i);
function funpre(){
   
    console.log(i);
    console.log("in prev");
    --i;
    console.log(i);
    if (i<0) i=2;
document.getElementById("slideshow").src=slide[i];

}

function funnext(){
    console.log(i);                     
    console.log("in next");
    ++i;
    if (i>=slide.length) i=0;
document.getElementById("slideshow").src=slide[i];

}
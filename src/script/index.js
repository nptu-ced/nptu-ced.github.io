let index = 1;
let stringURL = `src/book/英文-${index}.xhtml`
let iframe = document.querySelector("iframe");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
right.addEventListener("click",e=>{
    if(index == 53) return;
    index++;
    stringURL = `src/book/英文-${index}.xhtml`
    console.log(stringURL)
    iframe.src = stringURL
    console.log(iframe.src)
})
left.addEventListener("click",e=>{
    if(index == 1) return;
    index--;
    stringURL = `src/book/英文-${index}.xhtml`
    console.log(stringURL)
    iframe.src = stringURL
    console.log(iframe.src)
})
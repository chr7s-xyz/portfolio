var root=document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var black1 =rootStyles.getPropertyValue('--color-black1');
console.log(black1);




let dark=()=>{
    console.log('dark clicked')
root.style.setProperty('--color-neutral1','#212529');
root.style.setProperty('--color-neutral2','#006BA6');
root.style.setProperty('--color-neutral3','#FFBC42');
root.style.setProperty('--color-neutral4','#04A777');
root.style.setProperty('--color-neutral5','#ADB5BD');
root.style.setProperty('--color-neutraltext','#D8315B');

}
let light=()=>{
    console.log('light clicked')
root.style.setProperty('--color-neutral1','#CDB4DB');
root.style.setProperty('--color-neutral2','#FFC8DD');
root.style.setProperty('--color-neutral3','#FFAFCC');
root.style.setProperty('--color-neutral4','#023047');
root.style.setProperty('--color-neutral5','#218ffc');
root.style.setProperty('--color-neutraltext','#03071E');

console.log(document.querySelectorAll('svg'))
}


let redirectIcon= document.getElementById('button-toggle')
let redirectlink = document.getElementById('links')
let togglecross = document.getElementById('button-toggle2')

redirectIcon.addEventListener("click",()=>{
redirectlink.classList.toggle('active')
togglecross.classList.toggle('active')
redirectIcon.classList.toggle('activerev')
})

togglecross.addEventListener("click",()=>{
redirectlink.classList.remove('active')
togglecross.classList.remove('active')
redirectIcon.classList.remove('activerev')

})

const observer =  new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
console.log(hiddenElements)
hiddenElements.forEach((el)=>{observer.observe(el)})
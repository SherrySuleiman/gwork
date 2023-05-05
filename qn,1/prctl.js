// qn1a
let A = document.querySelector('#S');
setInterval(function(){
    A.innerHTML = "Try to put yourself in someone's place";
},3000);

//qn1c
let M = document.querySelector('img');
M.addEventListener('mouseover', function(){
    M.style.width = "500px";
});
M.addEventListener('mouseout', function(){
    M.style.height = "500px";
});
let B = document.querySelector('button');
B.addEventListener('click',function(){
    M.style.marginLeft = "200px";
});
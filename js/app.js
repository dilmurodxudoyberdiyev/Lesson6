const box = document.querySelector(".wrapper-box");
let yitti = document.querySelector("#yitti");
let sakkiz = document.querySelector("#sakkiz");
let tuqqiz = document.querySelector("#tuqqiz");
let off = document.querySelector("#off");
let turt = document.querySelector("#turt");
let besh = document.querySelector("#besh");
let olti = document.querySelector("#olti");
let qiymat = document.querySelector("#qiymat");
let bir = document.querySelector("#bir");
let ikki = document.querySelector("#ikki");
let uch = document.querySelector("#uch");
let buluv = document.querySelector("#buluv");
let minus = document.querySelector("#minus");
let nuol = document.querySelector("#nuol");
let plus = document.querySelector("#plus");
let teng = document.querySelector("#teng");


// =============================================================

yitti.addEventListener("click",function(){
    box.textContent += yitti.value;
})
sakkiz.addEventListener("click",function(){
    box.textContent += sakkiz.value;
})
tuqqiz.addEventListener("click",function(){
    box.textContent += tuqqiz.value;
})
turt.addEventListener("click",function(){
    box.textContent += turt.value;
})
besh.addEventListener("click",function(){
    box.textContent += besh.value;
})
olti.addEventListener("click",function(){
    box.textContent += olti.value;
})
bir.addEventListener("click",function(){
    box.textContent += bir.value;
})
ikki.addEventListener("click",function(){
    box.textContent += ikki.value;
})
uch.addEventListener("click",function(){
    box.textContent += uch.value;
})
nuol.addEventListener("click",function(){
    box.textContent += nuol.value;
})
qiymat.addEventListener("click",function(){
    box.textContent += qiymat.value;
})
buluv.addEventListener("click",function(){
    box.textContent += buluv.value;
})
minus.addEventListener("click",function(){
    box.textContent += minus.value;
})
plus.addEventListener("click",function(){
    box.textContent += plus.value;
})
teng.addEventListener("click", function(){
    const result = box.textContent;
    let value1 = eval(result);
    box.textContent = value1;
})
off.addEventListener("click",function(){
    box.textContent = "";
    console.log(box.value);
})
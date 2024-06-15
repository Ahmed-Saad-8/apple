const phone0 = document.querySelector(".phone0");
const phone1 = document.querySelector(".phone1");
const phone2 = document.querySelector(".phone2");
const phone3 = document.querySelector(".phone3");
const phone4 = document.querySelector(".phone4");
const body = document.querySelector("body");
const mainImage = document.querySelector(".main-image");
const logo = document.querySelector(".logo");

const phones = [phone0,phone1,phone2];

console.log(phones);




phone0.onclick = ()=>{
    body.style.background = "rgb(179, 179, 127)";
    mainImage.src = "assets/0.png";
}

phone1.onclick = ()=>{
    body.style.background = "lightblue";
    mainImage.src = "assets/1.png";
}

phone2.onclick = ()=>{
    body.style.background = "gray";
    mainImage.src = "assets/2.png";
}

phone3.onclick = ()=>{
    body.style.background = "rgb(196, 192, 192)";
    mainImage.src = "assets/3.png";
}

phone4.onclick = ()=>{
    body.style.background = "rgb(145, 49, 49)";
    mainImage.src = "assets/4.png";
}
// all variables that we need right now
const navList = document.querySelector('nav ul');
const menuList = document.getElementById('menu');
const hamIcon = document.getElementById("ham-icon");
const menu = document.getElementById("menu");
const hamDivs = Array.from(document.querySelectorAll("#ham-icon div"))
const arrowDown = document.querySelector('.arrow-down');
let cards = Array.from(document.querySelectorAll("#card"));
let i = 0;
let j = 0;
let screenWidth = Math.round(screen.width);


// for arrow down
arrowDown.addEventListener('click', () => {
    document.querySelector(`.works`).scrollIntoView();
})

// for cards animation
for(let i = 0; i < cards.length; i++)
{
    cards[i].addEventListener("animationend", () => {
        cards[i].classList.remove("animation");

    })
}
cards[cards.length - 1].addEventListener("animationstart", () => {
    i = 0;
}) 

let id = setInterval(() => {
    if(!document.hasFocus())
    {
        for(let i = 0; i < cards.length; i++)
        {
            cards[i].classList.remove("animation");  
        }
    } else {
        if (i < cards.length)
        {
            cards[i].classList.add("animation");
            i++;
        }
    }


},1500);

// for nav scroll
navList.addEventListener('click', (e) => {
    if(e.target.nodeName == "LI")
    {
        document.querySelector(`.${e.target.innerHTML}`).scrollIntoView();
    }
})



// for menu scroll
menuList.addEventListener('click', (e) => {
    if(e.target.nodeName == "LI")
    {
        document.querySelector(`.${e.target.innerHTML}`).scrollIntoView();
        menu.classList.toggle("active-menu");
        hamDivs[0].classList.toggle("active-div1");
        hamDivs[1].classList.toggle("active-middle-div");
        hamDivs[2].classList.toggle("active-div3");
    }
})


// for ham-icon animation
hamIcon.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    hamDivs[0].classList.toggle("active-div1");
    hamDivs[1].classList.toggle("active-middle-div");
    hamDivs[2].classList.toggle("active-div3");
});

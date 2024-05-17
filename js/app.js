var elModeBtn = document.querySelector(".header-top__mode-btn")
var elLogoImg = document.querySelector(".header-top__logo-img")
var elHamburgerBtn = document.querySelector(".header-top__hamburger-btn")
var elMenuList = document.querySelector(".menu__list")

elModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("mode")
    
    if(document.body.classList == "mode"){
        elLogoImg.setAttribute("src", "./images/logo-white.svg")
    }
    else{
        elLogoImg.setAttribute("src", "./images/logo.svg")
    }
})
elHamburgerBtn.addEventListener("click", function(){
    elMenuList.classList.toggle("open")
})
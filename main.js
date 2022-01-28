const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuList = document.querySelector(".mobile-menu-list");
const logo = document.querySelector(".header-logo");
const banner = document.querySelector("#banner");
const mMenuItem = document.querySelector(".m-menu-item");


function showMenu() {
    mobileMenuBtn.classList.add("hide");

    // mobileMenuContainer.classList.add("display");
    mobileMenuList.classList.add("display");
    mobileMenuContainer.style.transition = ".3s ease";
    mobileMenuContainer.style.height = "200px";
    logo.classList.add("logo-center");
    banner.addEventListener("click", function() {
        mobileMenuContainer.classList.remove("display");
        mobileMenuList.classList.remove("display");
        mobileMenuBtn.classList.remove("hide");
        logo.classList.remove("logo-center");
        mobileMenuContainer.style.height = "0px";
    })
}

mobileMenuBtn.addEventListener('click', showMenu);
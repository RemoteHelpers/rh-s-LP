const menuButton = document.querySelector('.menu-btn');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const menuCloseBtn = document.querySelector('#close');
const headerSection = document.querySelector('.header-section');
const serviceSectionconst = document.querySelector('#service');
const stuffSectionconst = document.querySelector('#stuff');
const typeSectionconst = document.querySelector('#type');
const portfolioSectionconst = document.querySelector('#portfolio');
const contactSectionconst = document.querySelector('#contact');
const footerSectionconst = document.querySelector('#footer');


function showMobileMenu() {
    mobileMenuWrapper.classList.add('show-menu');
    mobileMenuContainer.classList.add('mobile-menu-container__visible');
    // headerSection.classList.add('blur');
    menuCloseBtn.addEventListener('click', hideMobileMenu);
}

function hideMobileMenu() {
    mobileMenuWrapper.classList.remove('show-menu');
    mobileMenuContainer.classList.remove('mobile-menu-container__visible');
    // headerSection.classList.remove('blur');
    menuButton.addEventListener('click', showMobileMenu);
}

menuButton.addEventListener('click', showMobileMenu);
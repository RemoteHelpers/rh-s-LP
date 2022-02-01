const menuButton = document.querySelector('.menu-icon');
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

const contactFormSection = document.querySelector('.contactform-section');
const collectionSection_top = document.querySelector(
  '#shopify-section-collection-template'
);
menuButton.addEventListener('click', showMobileMenu);

function showMobileMenu() {
  mobileMenuWrapper.classList.toggle('show-menu');
  mobileMenuContainer.classList.toggle('mobile-menu-container__visible');
  menuButton.classList.toggle('active');
  // headerSection.classList.add('blur');
}

// function hideMobileMenu() {
//   mobileMenuWrapper.classList.remove('show-menu');
//   mobileMenuContainer.classList.remove('mobile-menu-container__visible');
//   // headerSection.classList.remove('blur');
//   menuButton.addEventListener('click', showMobileMenu);
// }

function customSelectBild(
  optionDisplay,
  t,
  optionWrapper,
  contactFormSection,
  selectCustom
) {
  optionDisplay.addEventListener('click', function () {
    optionWrapper.classList.toggle('display');
    optionDisplay.classList.toggle('active-display');
  });

  optionWrapper.addEventListener('click', function ({ target }) {
    if (t) {
      optionDisplay.innerHTML = target.innerHTML;
    }
    const active = contactFormSection.querySelector('.option-wrapper .active');
    if (active != target) {
      active.classList.remove('active');
    }
    target.classList.add('active');

    if (selectCustom.tagName == 'INPUT') {
      selectCustom.value = target.attributes.value.value;
    } else if (selectCustom.tagName == 'SELECT') {
      const arr = Array.from(selectCustom.children);
      const selected = arr.find(
        (item) => item.value === target.attributes.value.value
      );
      selected.setAttribute('selected', 'selected');
      selectCustom.dispatchEvent(new Event('change'));
    }

    if (optionWrapper.classList.contains('display')) {
      optionWrapper.classList.remove('display');
    }
  });

  contactFormSection.addEventListener('click', function ({ target }) {
    if (
      target != optionWrapper &&
      target.closest('.option-display') != optionDisplay
    ) {
      optionWrapper.classList.remove('display');
      optionDisplay.classList.remove('active-display');
    }
  });
}

if (contactFormSection) {
  const optionDisplay = contactFormSection.querySelector('.option-display');
  const optionWrapper = contactFormSection.querySelector('.option-wrapper');
  const selectCustom = contactFormSection.querySelector(
    '.contact_form__input--select'
  );

  customSelectBild(
    optionDisplay,
    true,
    optionWrapper,
    contactFormSection,
    selectCustom
  );
}

if (collectionSection_top) {
  const optionDisplay = collectionSection_top.querySelector('.option-display');
  const optionWrapper = collectionSection_top.querySelector('.option-wrapper');
  const buildinSelect = collectionSection_top.querySelector('select#SortBy');

  customSelectBild(
    optionDisplay,
    false,
    optionWrapper,
    collectionSection_top,
    buildinSelect
  );
}

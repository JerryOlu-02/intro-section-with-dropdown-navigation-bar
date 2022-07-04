'use strict';

const featuresItem = document.querySelector('.features--item');
const companyItem = document.querySelector('.company--item');
const featuresSelection = document.querySelector('.features--selection');
const companySelection = document.querySelector('.company--selection');
const featuresButton = document.querySelectorAll('.fa-angle-down')[0];
const companyButton = document.querySelectorAll('.fa-angle-down')[1];

const menuBarOption = document.querySelector('.fa-bars');
const cancelBarOption = document.querySelector('.fa-xmark');

const listSelection = document.getElementById('list--selection');
const loginSelection = document.getElementById('login--selection');

const featuresDropdown = function () {
  featuresSelection.classList.toggle('hidden');

  if (featuresButton.classList.contains('fa-angle-down')) {
    featuresButton.classList.remove('fa-angle-down');
    featuresButton.classList.add('fa-angle-up');
  } else if (featuresButton.classList.contains('fa-angle-up')) {
    featuresButton.classList.remove('fa-angle-up');
    featuresButton.classList.add('fa-angle-down');
  }
};

const companyDropdown = function () {
  companySelection.classList.toggle('hidden');

  if (companyButton.classList.contains('fa-angle-down')) {
    companyButton.classList.remove('fa-angle-down');
    companyButton.classList.add('fa-angle-up');
  } else if (companyButton.classList.contains('fa-angle-up')) {
    companyButton.classList.remove('fa-angle-up');
    companyButton.classList.add('fa-angle-down');
  }
};

const menuBarDropdown = function () {
  if (menuBarOption.classList.contains('fa-bars')) {
    menuBarOption.classList.remove('fa-bars');
    menuBarOption.classList.add('fa-xmark');

    listSelection.style.visibility = 'visible';
    loginSelection.style.visibility = 'visible';
  } else if (menuBarOption.classList.contains('fa-xmark')) {
    menuBarOption.classList.remove('fa-xmark');
    menuBarOption.classList.add('fa-bars');

    listSelection.style.visibility = 'hidden';
    loginSelection.style.visibility = 'hidden';
  }
};

featuresItem.addEventListener('click', featuresDropdown);
companyItem.addEventListener('click', companyDropdown);
menuBarOption.addEventListener('click', menuBarDropdown);

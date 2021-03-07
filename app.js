'use strict';

const dropdown = document.querySelector('.dropdown');
const dropToggle = document.querySelector('.dropdown-toggle');
const dropMenu = document.querySelector('.dropdown-menu');


dropToggle.addEventListener("click" , () => {
    dropMenu.classList.toggle('show');
});

dropToggle.addEventListener("blur", ()=> { 
    dropMenu.classList.remove('show');
});


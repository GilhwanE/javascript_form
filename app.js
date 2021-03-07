'use strict';

const dropDown = document.querySelector('.dropdown');
const dropToggle = document.querySelector('.dropdown-toggle');
const dropMenu = document.querySelector('.dropdown-menu');
const dropItme = document.querySelector('.dropdown-item');
const dropOptions = document.querySelectorAll('.dropdown-option');

dropToggle.addEventListener("click" , () => {
    dropMenu.classList.toggle('show');
});

dropToggle.addEventListener("blur", ()=> { 
    dropMenu.classList.remove('show');
});



// option(item)에서 선택된값을 dropdown-toggle이름 표시란에 표시해야함
dropOptions.forEach(function(item) {
    item.addEventListener('click', (e) => {
    const value = e.currentTarget.textContent.trim();
    dropToggle.textContent = value;
    dropToggle.classList.add('selected');

})
});

const input = document.querySelector('#header__menu--toggle input');
const shadow = document.querySelector('.header__menu--shadow');

input.addEventListener('click', () => {
    if(input.checked == true){
        shadow.style.display = 'block';
    } else{
        shadow.style.display = 'none';
    }
});
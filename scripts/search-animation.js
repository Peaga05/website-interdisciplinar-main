let headerSearch = document.querySelector('.header__search');
let labelSearch = document.querySelector('.header__search label');
let inputSearch = document.querySelector('.header__search--input');

labelSearch.addEventListener('click', () => {
    inputSearch.style.display = 'block';
});

inputSearch.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) {
      if(inputSearch.style.display == 'none') {
          // code here
      }
    }
  });
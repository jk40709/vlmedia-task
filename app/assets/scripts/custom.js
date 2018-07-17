
// Menu interakce
var body = document.querySelector('body'),
    siteNav = document.querySelector('.site-nav'),
    toggleNav = document.getElementById('toggle-nav');

toggleNav.onclick = function() {
    body.classList.toggle('overflow-hidden');
    siteNav.classList.toggle('open');
    toggleNav.classList.toggle('active');
};

// Autocomplete w/ datalist
var dataList = document.getElementById('posts-datalist');
var input = document.getElementById('ajax');

var request = new XMLHttpRequest();

request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      var jsonOptions = JSON.parse(request.responseText);
  
      jsonOptions.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item;
        dataList.appendChild(option);
      });
      
      input.placeholder = "Vyhledávejte v příspěvcích";
    } else {
      input.placeholder = "Načítání výsledků se nezdařilo";
    }
  }
};

input.placeholder = "Načítám...";

request.open('GET', 'assets/data/search-data.json', true);
request.send();

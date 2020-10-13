
function newestExp(){
  fetch('http://localhost:3000/newest')
    .then(response => response.json())
      .then(data => populateGrid('newest', data));
}

function mostLiked(){
  //pulls results from API
  fetch("http://localhost:3000/newest")
  .then(response => response.json())
    .then(data => populateGrid('liked', data));
}

function allCats(){
  fetch('http://localhost:3000/categories')
    .then(response => response.json())
      .then(data => {
        populateCats('cat-options', data);
        populateCats('cat-search-options', data);
      });
}

function toggleCatSearch(){
  let catForm = document.getElementById('cat-search');
  if(catForm.style.display === 'none'){
    catForm.style.display = 'block';
  }
  else {
    catForm.style.display = 'none';
  }
}

function toggleResults(){
  let results = document.getElementById('search-results');
  if(results.style.display === 'none') {
    results.style.display = 'block';
  }
  else {
    results.style.display = 'none';
  }
}

function toggleNewExp(){
  let newExp = document.getElementById('exp-form');
  if(newExp.style.display === 'none'){
    newExp.style.display = 'block';
  }
  else {
    newExp.style.display = 'none';
  }
}

function toggleNewCat(){
  let newCat = document.getElementById('cat-form');
  if(newCat.style.display === 'none'){
    newCat.style.display = 'block';
  }
  else {
    newCat.style.display = 'none';
  }
}

function sendExp(){
  let formData = {
    title: document.getElementById('new-title').value,
    description: document.getElementById('new-description').value,
    date: document.getElementById('new-date').value,
    coordinates: document.getElementById('new-coordinates').value,
    location: document.getElementById('new-location').value
  };
  console.log(formData);
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/experiences", configObj).then(response => response.json()).then(json => console.log(json));
}

function sendCat(){
  let formData = {
    name: document.getElementById('new-name').value
  };
  console.log(formData);
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/categories", configObj).then(response => response.json()).then(json => console.log(json));
}

function catSearch(terms){
  let formData = {
    terms: terms
    };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/categories_search", configObj)
    .then(response => response.json())
      .then(data => {
        document.getElementById('search-results').style.display = 'block';
        populateGrid('results', data);
      });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function populateGrid(grid, results){
  let elements  = results
  let gridName = `${grid}-grid`
  let targetGrid = document.getElementById(gridName);
  removeAllChildNodes(targetGrid);

  //make a new tile for the exp and then append it to the new-grid
for(let i = 0; i<elements.length; i++) {
    let container = document.createElement('div');
    container.className = 'experience--container'

    let photo = document.createElement('img');
    photo.href = elements[i]['photo'];
    photo.className = 'exp--photo';

    let title = document.createElement('h3');
    title.textContent = elements[i]['title'];
    title.className = 'exp--title';

    let description = document.createElement('h2');
    description.textContent = elements[i]['description'];
    description.className = 'exp--description';

    let date = document.createElement('h3');
    date.textContent = elements[i]['date'];
    date.className = 'exp--date';

    let location =  document.createElement('h3');
    location.textContent = elements[i]['location'];
    location.classNameName = 'exp--location';

    let coordinates = document.createElement('h3');
    coordinates.textContent = elements[i]['coordinates'];
    coordinates.className = 'exp--coordinates';

    container.appendChild(photo);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(date);
    container.appendChild(location);
    container.appendChild(coordinates);

    targetGrid.appendChild(container);
  };
}

function populateCats(target, results){
  let elements  = results
  let targetGrid = document.getElementById(target);
  removeAllChildNodes(targetGrid);

  //make a new tile for the exp and then append it to the new-grid
for(let i = 0; i<elements.length; i++) {
    let option = document.createElement('option');
    option.value = elements[i].name;
    option.textContent = elements[i].name;

    targetGrid.appendChild(option);
  };
}

function getButtons(){
  //JS variables for all nav & search buttons
  return {
    refresh: document.getElementById('refresh'),
    newExp: document.getElementById('new-exp'),
    love: document.getElementById('love'),
    travel: document.getElementById('travel'),
    birthdays: document.getElementById('birthdays'),
    catSearchBtn: document.getElementById('cat-search-btn'),
    catSubmit: document.getElementById('cat-submit'),
    newExpSubmit: document.getElementById('new-exp-submit'),
    newCatSubmit: document.getElementById('new-cat-submit'),
    newCat: document.getElementById('new-cat')
  };
}

function handleButtons(e){
    buttons = getButtons();
    let scope = "";
    let terms = "";
    let results;
  //switch statement for navigation
      switch(e.target){
        case buttons.refresh:
            populateExp();
            break;

        case buttons.newExp:
            toggleNewExp();
            break;

        case buttons.love:
          catSearch('Love');
          break;

        case buttons.travel:
          catSearch('Travel');
          break;

        case buttons.birthdays:
          catSearch('Birthdays');
          break;

        case buttons.catSearchBtn:
          toggleCatSearch();
          break;

        case buttons.catSubmit:
          terms = document.getElementById('cat-search-options').options[ this.selectedIndex ].value;
          console.log(terms);
          catSearch(terms);
          break;

        case buttons.newExpSubmit:
          sendExp();
          window.alert('Experience sent to server. Check your newest experiences section to make sure it worked!');
          newestExp();

        case buttons.newCatSubmit:
          sendCat();
          window.alert('Category sent to server. Check the category dropdown when creating an experience to make sure it worked!');
          allCats();
          break;

        case buttons.newCat:
          toggleNewCat();
          break;
    };
}

document.addEventListener("DOMContentLoaded", () => {
  newestExp();
  mostLiked();
  allCats();

  document.addEventListener('click', (e) => {
    e.preventDefault();
    handleButtons(e);
  });
});

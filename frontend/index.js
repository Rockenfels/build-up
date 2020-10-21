import { App } from './App';
import { Adaptor } from './Adaptor';






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

function populateCats(results){
  let elements  = results
  let targetGrid = document.getElementById('cat-options');
  removeAllChildNodes(targetGrid);

  //make a new tile for the exp and then append it to the new-grid
for(let i = 0; i<elements.length; i++) {
    let option = document.createElement('option');
    option.value = elements[i].name;
    option.textContent = elements[i].name;

    targetGrid.appendChild(option);
  };
}

function refreshExp(){
  newestExp();
  mostLiked();
  allCats();
  getExps();
}

function getButtons(){
  //JS variables for all nav & search buttons
  return {
    refresh: document.getElementById('refresh'),
    newExp: document.getElementById('new-exp'),
    catSearchBtn: document.getElementById('cat-search-btn'),
    newExpSubmit: document.getElementById('new-exp-submit'),
    newCatSubmit: document.getElementById('new-cat-submit'),
    newCat: document.getElementById('new-cat')
  };
}

function handleButtons(e){
    buttons = getButtons();
  //switch statement for navigation
      switch(e.target){
        case buttons.refresh:
            refreshExp();
            break;

        case buttons.newExp:
            toggleNewExp();
            break;

        case buttons.newExpSubmit:
          sendExp();
          window.alert('Experience sent to server. Check your newest experiences section to make sure it worked!');
          newestExp();
          break;

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
  refreshExp();

  document.addEventListener('click', (e) => {
    e.preventDefault();
    handleButtons(e);
  });
});

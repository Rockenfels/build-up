function newestExp(){
  let newest = [];
  //pulls results from API
  fetch("http://localhost:3000/newest")
  .then(response => response.json())
  .then(json => newest.push(json.results));
  //flatttens results
  return newest[0];
}

function mostLiked(){
  let liked = []
  //pulls results from API
  fetch("http://localhost:3000/newest")
  .then(response => response.json())
  .then(json => newest.push(json.results));
  //flattens results
  return liked[0];
}

function toggleExpSearch(){
  let expSearch = Document.getElementById('exp-search');
 if(expSearch.style.display === 'none'){
   expSearch.style.display = 'block';
 }
 else {
   expSearch.style.display = 'none';
 }
}

function toggleCatSearch(){
  let catSearch = Document.getElementById('cat-search');
  if(catSearch.style.display === 'none'){
    catSearch.style.display = 'block';
  }
  else {
    catSearch.style.display = 'none';
  }
}

function toggleNewExp(){
  let newExp = Document.getElementById('new-exp');
  if(newExp.style.display === 'none'){
    newExp.style.display = 'block';
  }
  else {
    newExp.style.display = 'none';
  }
}

function sendExp(){
  let formData = {
    title: document.getElementById('new-title').textContent,
    description: document.getElementById('new-description').textContent,
    date: document.getElementById('new-date').textContent,
    coordinates: document.getElementById('new-coordinates').textContent,
    location: document.getElementyId('new-location').textContent
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/experiences", configObj).then(response => respones.json()).then(json => console.log(json));
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

  fetch("http://localhost:3000/categories/search", configObj).then(response => respones.json()).then(json => console.log(json));

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function populateNew(){
  let newest = newestExp();
  let newGrid = document.getElementById('newest-grid');
  removeAllChildNodes(newGrid);

  //make a new tile for the exp and then append it to the new-grid
  for(let exp of newest){
    let container = document.createNewElement('div');
    container.className = 'experience--container'

    let photo = document.createNewElement('img'); //figure out how to add this
    photo.href = exp.photo;
    photo.className = 'exp--photo';

    let title = doument.createNewElement('h3');
    title.textContent = exp.title;
    title.className = 'exp--title';

    let description = document.createNewElement('h2');
    description.textContent = exp.description;
    description.className = 'exp--description';

    let date = document.createNewElement('h3');
    date.textContent = exp.date;
    date.className = 'exp--date';

    let location =  document.createNewElement('h3');
    location.textContent = exp.location;
    location.classNameName = 'exp--location';

    let coordinates = document.createNewElement('h3');
    coordinates.textContent = exp.coordinates;
    coordiantes.className = 'exp--coordinates';

    container.appendChild(photo);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(date);
    container.appendChild(location);
    container.appendChild(coordinates);

    newGrid.appendChild(container);
  }
}

function populateLiked(){
  let liked = mostLiked();
  let likedGrid = document.getElementById('liked-grid');
  removeAllChildNodes(likedGrid);

  //make a new tile for the exp and then append it to the new-grid
  for(let exp of liked){
    let container = document.createNewElement('div');
    container.className = 'experience--container'

    let photo = document.createNewElement('img'); //figure out how to add this
    photo.href = exp.photo;
    photo.className = 'exp--photo';

    let title = doument.createNewElement('h3');
    title.textContent = exp.title;
    title.className = 'exp--title';

    let description = document.createNewElement('h2');
    description.textContent = exp.description;
    description.className = 'exp--description';

    let date = document.createNewElement('h3');
    date.textContent = exp.date;
    date.className = 'exp--date';

    let location =  document.createNewElement('h3');
    location.textContent = exp.location;
    location.classNameName = 'exp--location';

    let coordinates = document.createNewElement('h3');
    coordinates.textContent = exp.coordinates;
    coordiantes.className = 'exp--coordinates';

    container.appendChild(photo);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(date);
    container.appendChild(location);
    container.appendChild(coordinates);

    likedGrid.appendChild(container);
  }
}

function populateExp(){
  populateNew();
  populateLiked();
}

function getButtons(){
  //JS variables for all nav & search buttons
  let refresh = document.getElementById('referesh');
  let newExp = document.getElementById('new-exp');
  let love = document.getElementById('love');
  let travel = document.getElementById('travel');
  let birthdays = document.getElementById('birthdays');
  let catSearchBtn = document.getElementById('cat-search-btn');
  let expSearchBtn = document.getElementById('exp-search-btn');
  let catSubmit = document.getElementById('cat-submit');
  let navSubmit = document.getElementById('nav-submit');

  return {
    refresh: refresh,
    newExp: newExp,
    love: love,
    travel: travel,
    birthdays: birthdays,
    catSearchBtn: catSearchBtn,
    catSubmit: catSubmit,
    navSubmit: navSubmit
  };
}

document.addEventListener("DOMContentLoaded", function(){
  populateExp();
  buttons = getButtons();
  document.addEventListener('click', (e) => {


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
    }
  });
});

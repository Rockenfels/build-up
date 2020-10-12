function getExps(){
  fetch('http://localhost:3000/experiences')
    .then(response => response.json())
      .then(data => populateGrid('experience', data));
}

function newestExp(){
  fetch('http://localhost:3000/newest')
    .then(response => response.json())
      .then(data => populateGrid('newest', data));
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function populateGrid(grid, results){
  let elements  = results
  console.log(elements);
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
};

function getButtons(){
  //JS variables for all nav & search buttons
  return {
    refresh: document.getElementById('refresh'),
    newExp: document.getElementById('new-exp'),
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

        case buttons.newSubmit:
          sendExp();
          window.alert('Experience sent to server. Check your newest experiences section to make sure it worked!');
          newestExp();
    };
}

document.addEventListener("DOMContentLoaded", () => {
  newestExp();
  getExps();
  document.addEventListener('click', (e) => {
    e.preventDefault();
    handleButtons(e);
  });
});

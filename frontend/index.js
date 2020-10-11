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
  function populateNew(){
    let newest = newestExp();
    let newGrid = document.getElementById('newest-grid');

    //make a new tile for the exp and then append it to the new-grid
    for(let exp of newest){
      let container = document.createNewElement('div');
      container.class = 'experience--container'

      let photo = document.createNewElement('img'); //figure out how to add this
      photo.href = exp.photo;

      let title = doument.createNewElement('h3');
      title.textContent = exp.title;

      let description = document.createNewElement('h2');
      description.textContent = exp.description;

      let date = document.createNewElement('h3');
      date.textContent = exp.date;

      let location =  document.createNewElement('h3');
      location.textContent = exp.location;

      let coordinates
    }
  }

  function populateExp(){
    let liked = mostLiked();

    let likedGrid = document.getElementById('liked-grid');
    let expGrid = document.getElementById('experience-grid');



    //make a new tile for the exp and hten append to the liked-expGrid
    for(let exp of liked){

    }

    //

  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/categories", configObj).then(resonse => response.json()).then(json => console.log(json));
}

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener('click', (e) => {
//switch statement for navigation
    switch(e.target){
      case 'refresh':
          populateExp();
    }
  });
});

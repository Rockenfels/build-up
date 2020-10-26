
class App {
  constructor(){
    this.cats = [];
    this.test = 'well, that sucks.'
  }

   toggleCatSearch(){
    let catForm = document.getElementById('cat-search');
    if(catForm.style.display === 'none'){
      catForm.style.display = 'block';
    }
    else {
      catForm.style.display = 'none';
    }
  }

   toggleResults(){
    let results = document.getElementById('search-results');
    if(results.style.display === 'none') {
      results.style.display = 'block';
    }
    else {
      results.style.display = 'none';
    }
  }

   toggleNewExp(){
    let newExp = document.getElementById('exp-form');
    if(newExp.style.display === 'none'){
      newExp.style.display = 'block';
    }
    else {
      newExp.style.display = 'none';
    }
  }

   toggleNewCat(){
    let newCat = document.getElementById('cat-form');
    if(newCat.style.display === 'none'){
      newCat.style.display = 'block';
    }
    else {
      newCat.style.display = 'none';
    }
  }

   removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  }

   populateGrid(grid, results){
    let elements  = results
    let gridName = `${grid}-grid`
    let targetGrid = document.getElementById(gridName);
    app.removeAllChildNodes(targetGrid);

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

   populateCats(target){
    let elements = app.cats;
    let targetGrid = document.getElementById(target);

    if(targetGrid !== undefined ){
      app.removeAllChildNodes(targetGrid);
    }

    //make a new tile for the exp and then append it to the new-grid
  for(let i = 0; i<elements.length; i++) {
      let option = document.createElement('option');
      option.value = elements[i].name;
      option.textContent = elements[i].name;

      targetGrid.appendChild(option);
    };
  }

  setCats(data){
    this.cats = data;
  }

   getButtons(){
    //JS variables for all nav & search buttons
    return {
      refresh: document.getElementById('refresh'),
      newExp: document.getElementById('new-exp'),
      toggleSearch: document.getElementById('toggle-search'),
      catSearchSubmit: document.getElementById('cat-search-submit'),
      newExpSubmit: document.getElementById('new-exp-submit'),
      newCatSubmit: document.getElementById('new-cat-submit'),
      newCat: document.getElementById('new-cat')
    };
  }
}

const app = new App();

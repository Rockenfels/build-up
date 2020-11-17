class Adaptor {
  constructor(){
    this.url = 'http://localhost:3000/'
  }

   getExps(){
    fetch(this.url + 'experiences')
      .then(response => response.json())
        .then(data => app.populateGrid('experience', data));
  }

   newestExp(){
    fetch(this.url + 'newest')
      .then(response => response.json())
        .then(data => app.populateGrid('newest', data));
  }

   mostLiked(){
    fetch(this.url + "mostLiked")
    .then(response => response.json())
      .then(data => app.populateGrid('liked', data));
  }

   allCats(){
    fetch(this.url + 'categories')
      .then(response => response.json())
        .then(data => {
          app.setCats(data);
          return data;
        });
  }

   sendExp(){
    let formData = {
      title: document.getElementById('new-title').value,
      description: document.getElementById('new-description').value,
      date: document.getElementById('new-date').value,
      coordinates: document.getElementById('new-coordinates').value,
      location: document.getElementById('new-location').value
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(this.url + "experiences", configObj).then(console.log('sent'));

    document.getElementById('new-title').value = "";
    document.getElementById('new-description').value = "";
    document.getElementById('new-date').value= "";
    document.getElementById('new-coordinates').value= "";
    location: document.getElementById('new-location').value= "";
  }

   sendCat(){
    let formData = {
      name: document.getElementById('new-name').value
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(this.url + "categories", configObj).then(console.log('sent'));
  }

   catSearch(){
    let formData = {
      terms: document.getElementById('cat-search-options').value
      };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(this.url + "categories_search", configObj)
      .then(response => response.json())
        .then(data => {
          console.log(data);
          app.populateGrid('results', data);
        });
  }

   refreshExp(){
    this.newestExp();
    this.getExps();
  }

}

const adaptor = new Adaptor();
adaptor.allCats;







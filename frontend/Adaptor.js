export default class Adaptor{

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

  function mostLiked(){
    fetch("http://localhost:3000/newest")
    .then(response => response.json())
      .then(data => populateGrid('liked', data));
  }

  function allCats(){
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
        .then(data => {
          populateCats(data);
        });
  }

  function sendExp(){
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

    fetch("http://localhost:3000/experiences", configObj).then(response => response.json()).then(json => console.log(json));

    document.getElementById('new-title').value = "";
    document.getElementById('new-description').value = "";
    document.getElementById('new-date').value= "";
    document.getElementById('new-coordinates').value= "";
    location: document.getElementById('new-location').value= "";
  }
}

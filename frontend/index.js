function newestExp(){
  fetch("http://localhost:3000/categories/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    search: {
        terms: 'Treat Yourself'
    }
  })
}).then(response => response.json()).then(json => console.log(json));
}

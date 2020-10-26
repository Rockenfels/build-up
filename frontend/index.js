 function handleButtons(e){
    buttons = app.getButtons();
  //switch statement for navigation
      switch(e.target){
        case buttons.refresh:
            adaptor.refreshExp();
            break;

        case buttons.newExp:
            app.toggleNewExp();
            break;

        case buttons.newExpSubmit:
          adaptor.sendExp();
          window.alert('Experience sent to server. Check your newest experiences section to make sure it worked!');
          adaptor.newestExp();
          break;

        case buttons.newCatSubmit:
          adaptor.sendCat();
          window.alert('Category sent to server. Check the category dropdown when creating an experience to make sure it worked!');
          app.allCats = adaptor.allCats();
          app.populateCats(app.allCats, 'cat-options');
          app.populateCats(app.allCats, 'cat-search-options');
          break;

        case buttons.newCat:
          app.toggleNewCat();
          break;

        case buttons.toggleSearch:
          app.toggleCatSearch();
          break;

        case buttons.catSearchSubmit:
          if(document.getElementById('search-results').style.display !== 'block'){
            app.toggleResults();
          }
          adaptor.catSearch();
          break;
    };
}

document.addEventListener("DOMContentLoaded", () => {
  adaptor.allCats();
  adaptor.refreshExp();
  setTimeout(() => {
    app.populateCats('cat-options');
    app.populateCats('cat-search-options');
  }, 2000);
  
 
  document.addEventListener('click', (e) => {
    e.preventDefault();
    handleButtons(e);
  });
});

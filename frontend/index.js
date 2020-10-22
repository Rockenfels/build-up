const adaptor =  new Adaptor();

 function handleButtons(e){
    console.log(e);
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
          adaptor.allCats();
          break;

        case buttons.newCat:
          app.toggleNewCat();
          break;
    };
}

document.addEventListener("DOMContentLoaded", () => {
  adaptor.refreshExp();

  document.addEventListener('click', (e) => {
    e.preventDefault();
    handleButtons(e);
  });
});

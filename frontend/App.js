export default class App{
  function toggleCatSearch(){
    let catForm = document.getElementById('cat-search');
    if(catForm.style.display === 'none'){
      catForm.style.display = 'block';
    }
    else {
      catForm.style.display = 'none';
    }
  }

  function toggleResults(){
    let results = document.getElementById('search-results');
    if(results.style.display === 'none') {
      results.style.display = 'block';
    }
    else {
      results.style.display = 'none';
    }
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

  function toggleNewCat(){
    let newCat = document.getElementById('cat-form');
    if(newCat.style.display === 'none'){
      newCat.style.display = 'block';
    }
    else {
      newCat.style.display = 'none';
    }
  }

}

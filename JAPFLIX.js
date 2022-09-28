const  MOVIES_DATA = "https://japceibal.github.io/japflix_api/movies-data.json";
var buscar = undefined;
let currentMoviesArray = [];

let showSpinner = function(){
    document.getElementById("spinner-wrapper").style.display = "block";
  }
  
  let hideSpinner = function(){
    document.getElementById("spinner-wrapper").style.display = "none";
  }
  
  let getJSONData = function(url){
      let result = {};
      showSpinner();
      return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }else{
          throw Error(response.statusText);
        }
      })
      .then(function(response) {
            result.status = 'ok';
            result.data = response;
            hideSpinner();
            return result;
      })
      .catch(function(error) {
          result.status = 'error';
          result.data = error;
          hideSpinner();
          return result;
      });
  }
  document.addEventListener("DOMContentLoaded", function(e){
  });



  function showMoviesList(){

   
    let htmlContentToAppend = "";

    for (let i = 0; i < currentMoviesArray.length; i++) {
        let movie = array[i];

        if  ((buscar != undefined) 
            && (movie.title.toLowerCase().includes(buscar.toLowerCase())
            || movie.genres.toLowerCase().includes(buscar.toLowerCase())
            || movie.tagline.toLowerCase().includes(buscar.toLowerCase())
            || movie.overview.toLowerCase().includes(buscar.toLowerCase()))) {
            

            htmlContentToAppend +=
                `<div class="album">
                  <div onclick="${movie.id}" class="card" "${movie.title}">
                  <div class="card-body">
                    <h5 class="card-">${movie.title} + "${movie.vote_average}"</h5>
                    <p class="card-text">${movie.overview} </div> </div> </div> `

        document.getElementById("lista").innerHTML = htmlContentToAppend;
            }
        else {
           alert("No se registra la existencia de película")
        }
    }

}
        
  
  document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(MOVIES_DATA).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentMoviesArray = resultObj.data
            showMoviesList()
        }
    })
})

document.getElementById("btnBuscar").addEventListener("click", function () {

    buscar = document.getElementById("btnBuscar").value;
    showMoviesList();

});
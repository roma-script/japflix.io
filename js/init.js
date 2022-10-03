//INIT VARIABLES Y CONSTANTES
const MOVIES_DATA = "https://japceibal.github.io/japflix_api/movies-data.json";
let currentMoviesArray = [];

//DEFINIMOS LA FUNCIÓN getJSONData
let getJSONData = function (url) {
  let result = {};

  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;

      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;

      return result;
    });
}


function stars() {
  let puntos = Math.round((movie.vote_average) / 2)
  var estrellitas = "";

  for (let i = 0; i < 5; i++) {
    if (i < puntos) {
      estrellitas += `<span class="fa fa-star checked"></span>`;
    } else {
      estrellitas += `<span class="fa fa-star"></span>`;
    }
  }

  return estrellitas;
}
//DEFINIMOS FUNCIÓN PARA AGREGAR LISTA DE PELÍCULAS AL HTML DEL INDEX <div class="album">
/* <div  class="card" onclick="${movie[i].id}" class="card" "${movie[i].title}">
 <div class="card-title">
 <h4  style="margin-left:20px; display:inline; float:left">${movie[i].title} `+  
 ` <h4 style="margin-right:20px; margin-right:40px; display:inline; float:right">${stars(movie[i].vote_average/2)}${starsBlack(movie[i].vote_average/2)}</h5> 
 <br>
 <p class="card-body">${movie[i].tagline} </div> 
 <footer>
 
 <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#target${movie[i].id}" aria-controls="offcanvasExampleLabel">
 Mas info
 </button>
 </footer></div> </div> `/*/

function showMoviesList() {
  let htmlContentToAppend = ""
  
  for (let i = 0; i < currentMoviesArray.length; i++) {
    let movie = currentMoviesArray[i];

    if ((buscar != "")
    && (movie.title.toLowerCase().includes(buscar.toLowerCase())
    || movie.tagline.toLowerCase().includes(buscar.toLowerCase())
    || movie.overview.toLowerCase().includes(buscar.toLowerCase())
    || movie.genres.some(e => e.name.toLowerCase().includes(buscar.toLowerCase())))) {

      htmlContentToAppend += `
        <div class="offcanvas offcanvas-top" tabindex="-1" id="target${movie.id}" aria-labelledby="offcanvasExampleLabel"">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" >${movie.title}</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            ${movie.overview}
          </div><hr>
          <footer><div class="dropdown mt-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            Numeros de la pelicula
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li> Year :${movie.release_date}</li>
            <li> Runtime :${movie.runtime} mins</li>
            <li> Revenue:  $ ${movie.release_date}</li>
            <li>Budget: $ ${movie.budget}</li>
      
            
            
          </ul>
        </div>
        </div>
      </div>
      <div  class="card" class="card" "${movie.title}">
      <div class="card-title" type="button" data-bs-toggle="offcanvas" data-bs-target="#target${movie.id}" aria-controls="offcanvasExampleLabel">
      <h4  style="margin-left:20px; display:inline; float:left">${movie.title} ` +
        ` <h4 style="margin-right:20px; margin-right:40px; display:inline; float:right">${stars(movie.vote_average / 2)}${starsBlack(movie.vote_average / 2)}</h5> 
      <br>
      <p class="card-body">${movie.tagline} </div> 
      </div>
      </div> 
            
            ` 
      }
    };

    if (htmlContentToAppend != "") {
      document.getElementById("lista").innerHTML = htmlContentToAppend;
    }
    else {
      alert("No se registra la existencia de película");
    }
  };

  function stars(score) {
    let puntos = Math.round(score)
    let template = [];
    for (e = 0; e < puntos; e++) {

      template += `<span class="fa fa-star checked"></span>`;
    }
    return template;
  };
  
  function starsBlack(score) {
    let puntos = Math.round(score)
    let templateBlack = [];
    for (a = 0; (puntos + a) < 5; a++) {

      templateBlack += `<span class="fa fa-star"></span>`;
    }
    return templateBlack;
  };


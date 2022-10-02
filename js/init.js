//INIT VARIABLES Y CONSTANTES
const  MOVIES_DATA = "https://japceibal.github.io/japflix_api/movies-data.json";
let currentMoviesArray = [];
 
//DEFINIMOS LA FUNCIÓN getJSONData
let getJSONData = function(url){
      let result = {};
     
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
           
            return result;
      })
      .catch(function(error) {
          result.status = 'error';
          result.data = error;
 
          return result;
      });
  }
 
 
  function stars(){
    let puntos = Math.round((movie.vote_average)/2)
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
//DEFINIMOS FUNCIÓN PARA AGREGAR LISTA DE PELÍCULAS AL HTML DEL INDEX
function showMoviesList(){
                     
    let htmlContentToAppend = "";
   
    for (let i = 0; i < currentMoviesArray.length; i++) {
        let movie = currentMoviesArray[i];
       
        if  ((buscar != "")
        && (movie.title.toLowerCase().includes(buscar.toLowerCase())
        || movie.tagline.toLowerCase().includes(buscar.toLowerCase())
        || movie.overview.toLowerCase().includes(buscar.toLowerCase()))) {
   
           
           
            htmlContentToAppend +=
            `<div class="album">
            <div onclick="${movie.id}" class="card" "${movie.title}">
            <div class="card-title">
            <h4  style="margin-left:20px; display:inline; float:left">${movie.title} `+  
             ` <h4 style="margin-right:20px; margin-right:40px; display:inline; float:right">${stars(movie.vote_average/2)}${starsBlack(movie.vote_average/2)}</h5> 
             <br>
            <p class="card-body">${movie.overview} </div> </div> </div> `
           
       
        }
    }
 
    if (htmlContentToAppend !=""){
        document.getElementById("lista").innerHTML = htmlContentToAppend;
    }
    else{
        alert("No se registra la existencia de película");
    }
}   

function stars(score){
    let puntos = Math.round(score)
    let template = [];
    for(e=0; e< puntos; e++){
      
      template +=`<span class="fa fa-star checked"></span>`;
    }
    return template;
  };
  function starsBlack(score){
    let puntos = Math.round(score)
    let templateBlack = [];
    for(a=0; (puntos + a)< 5; a++){
      
      templateBlack +=`<span class="fa fa-star"></span>`;
    }
    return templateBlack;     }

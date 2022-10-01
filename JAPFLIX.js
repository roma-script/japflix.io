//CÓDIGO A EJECUTARSE CUANDO EL DOM SE HA CARGADO
document.addEventListener("DOMContentLoaded", function(){
   
  //FETCHING DE LAS PELÍCULAS
  getJSONData(MOVIES_DATA).then(function(resultObj){
      if (resultObj.status === "ok"){
          currentMoviesArray = resultObj.data
          console.log(currentMoviesArray)
         
      }
  });

  //CLICK EN EL BOTÓN BUSCAR
  document.getElementById("btnBuscar").addEventListener("click", function () {
      buscar = document.getElementById("inputBuscar").value;
      showMoviesList();
  });

});
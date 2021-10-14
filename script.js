fetch(`https://ghibliapi.herokuapp.com/films`)
.then((response) => response.json())
.then((films) => {
    console.log(films)

    const movieSelection =document.querySelector("#movie-selection")
    const releaseYear = document.querySelector("#release-year")
    const movieDescription = document.querySelector("#movie-description")

    films.forEach(film => {
        const option = document.createElement("option")
        option.textContent = film.title
        option.value = film.title
        movieSelection.append(option)
    });

    document.querySelector("#movie-selection").addEventListener("change", (event) => {
        console.log(event.target.value)
        films.forEach(film => {

        if(event.target.value === film.title){    
            
            releaseYear.textContent = film.release_date
            movieDescription.textContent = film.description 
            }

            
        });
        
    })

})
.catch((error) => {
    console.log(error);
  })
fetch(`https://ghibliapi.herokuapp.com/films`)
.then((response) => response.json())
.then((films) => {
    console.log(films)

    const movieSelection = document.querySelector("#movie-selection")
    const movieTitle = document.querySelector("#movie-title")
    const releaseYear = document.querySelector("#release-year")
    const movieDescription = document.querySelector("#movie-description")

    films.forEach(film => {
        const option = document.createElement("option")
        option.textContent = film.title
        option.value = film.title
        movieSelection.append(option)
    });

    document.querySelector("#movie-selection").addEventListener("change", (event) => {
        event.preventDefault();

        console.log(event.target.value)
        films.forEach(film => {
            if(event.target.value === film.title){    
                
                movieTitle.textContent = event.target.value
                releaseYear.textContent = film.release_date
                movieDescription.textContent = film.description 
            }
            
        });
        
    })
    
    document.querySelector("form").addEventListener("submit",(event) =>{
        event.preventDefault();
        
        const userReview = (event.target.review.value)
        const reviewsList = document.querySelector("ul")

        li = document.createElement("li")
        strong = document.createElement("strong")
        strong.textContent = movieSelection.value + ":"
        li.textContent = " " + userReview
        li.prepend(strong)
        reviewsList.append(li)
        
        event.target.reset()
    })

})
.catch((error) => {
    console.log(error);
  })
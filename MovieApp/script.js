const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.querySelector('main')
const form = document.querySelector('form')
const input = document.querySelector('input')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchMovie()
})

async function getMovies(){
    const resp = await fetch(APIURL)
    const responseDate = await resp.json()
    // console.log(responseDate)
   const date =  responseDate.results.map(movie=>{
       return ` <div class="movie" >
        <img src=${IMGPATH+movie.poster_path
        } alt="">
        <div class="movie-info" >
            <h3>${movie.title
            }</h3>
            <span>${movie.vote_average}</span>
        </div>
        <p class="overview" >${movie.overview}</p>
        
    </div>`
    })
    console.log(responseDate)
    date.join('')
    // console.log(date.join(''))
    main.innerHTML = date.join('')
}
const data =  getMovies()

async function searchMovie(){
    const resp = await fetch(SEARCHAPI+input.value)
    const responseDate = await resp.json()
    // console.log(responseDate)
   const date =  responseDate.results.map(movie=>{
       return ` <div class="movie" >
        <img src=${IMGPATH+movie.poster_path
        } alt="">
        <div class="movie-info" >
            <h3>${movie.title
            }</h3>
            <span>${movie.vote_average}</span>
        </div>
        <p class="overview" >${movie.overview}</p>
        
    </div>`
    })
    console.log(responseDate)
    date.join('')
    console.log(date.join(''))
    main.innerHTML = date.join('')
}

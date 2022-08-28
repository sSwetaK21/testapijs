//seelectors
let moiveBox = document.querySelector(".movie_info")
let APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let IMGPATH = "https://image.tmdb.org/t/p/w1280";
let SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

async function getTheSow(api){
    let response = await fetch(api)
    let data = await response.json()
    console.log(data)
}

getTheSow(APIURL)

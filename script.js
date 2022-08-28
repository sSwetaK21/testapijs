//seelectors
let moiveBox = document.querySelector(".movie_info")
// let btn = document.querySelector(".submitBtn")
let APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let IMGPATH = "https://image.tmdb.org/t/p/w1280";
let SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    // let SEARCHAPI= "https://api.tvmaze.com/search/shows?q="

async function getTheShow(api){
    let response = await fetch(api)
    let data = await response.json()
    // console.log(data)
    showdata(data)
}
getTheShow(APIURL)


function showdata(data){
    moiveBox.innerHTML = "";
    data.results.forEach(
        item =>{
            const imagePath = item.poster_path === null ? "img/image-missing.png" : IMGPATH + item.poster_path;

            // console.log(item)
            let box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${poster_path}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${item.poster_path}  </h2>
                        <span> ${item.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${item.overview}
                    </p>
                 </div>
            `

            movie_info.appendChild(box)
        }
    )
}



document.querySelector(".submitBtn").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getTheShow(SEARCHAPI + event.target.value)
        } else {
            getTheShow(APIURL);
        }
    }
)


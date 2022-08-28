
let btn = document.querySelector('.submitBtn')
let inputData = document.querySelector("#search")
let movie_info = document.querySelector(".movie_info")
let showBtn = document.querySelector(".showMore")

btn.addEventListener("click", function (e) {
    // e.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${inputData.value}`)
        .then(response => response.json())//text --> json
        .then(data => {
            console.log(data)
            for (let item = 0; item < data.length; item++) {
                const box = document.createElement("div")
                box.classList.add("box")
                box.innerHTML =
                    `        <img src="${data[item]["show"]["image"].original}" alt="" />
                  <div class="overlay">
                      <div class="title"> 
                          <h2 class="h2title"> ${data[item]["show"].name}  </h2>
                          <span class="spanT"> ${data[item]["show"]["genres"]} <span>
                      </div>
                      <h3>Overview:</h3>
                      <p class="para"> 
                      ${data[item]["show"].summary}
                      </p>
                      <button type="button" class="showMore">Show More</button>
                   </div>`

                movie_info.appendChild(box)
            }


        }
        )

        .showBtn.addEventListener("click", function(){

            // console.log(show)

                fetch( `https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast`)
                .then(response => response.json())//text --> json
            .then(data=>{
                console.log(data)
                for(let i=0; i<data.length;i++){
                    movie_info.innerHTML ="";
                    const mainDiv = document.createElement("div")
                    mainDiv.classList.add("mainDiv")

                    mainDiv.innerHTML= `
                    <h2 class="detailTitle"> ${data[i]["show"].name}  </h2>
                    `
                }
            })

           

        })
       

})

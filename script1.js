
let btn = document.querySelector('.submitBtn')
let inputData = document.querySelector("#search")
let movie_info = document.querySelector(".movie_info")

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
                      <p> 
                      ${data[item]["show"].summary}
                      </p>
                   </div>`

                movie_info.appendChild(box)
            }


        }
        )
       

})

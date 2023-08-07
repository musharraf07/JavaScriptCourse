let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) =>{
    return v.json()
}).then((contests =>{
    console.log(contests)
    ihtml = ""
    for(item in contests){
        console.log(contests[item]);
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
                <img id="coding-image" src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg" >
                <div class="card-body ">
                  <h4 class="card-title">${contests[item].name}</h4>
                  <h6 class="card-title"> Status: ${contests[item].status} </h6>
                  <h6 class="card-title"> Site: ${contests[item].site}</h6>
                  <h6 class="card-title"> In 24 Hours: ${contests[item].in_24_hours}</h6>
                  <p class="card-text">Start: ${contests[item].start_time}</p>
                  <p class="card-text">End: ${contests[item].end_time}</p>
                  <a href="${contests[item].url}" class="btn bg-success text-light">Visit here</a>
                </div>
        </div>
        `
        
    }
    cardContainer.innerHTML = ihtml
}))









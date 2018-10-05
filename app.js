var appear = document.querySelector("#button").innerHTML;
//ar result = document.querySelector("result");


var hi = axios.get("https://rickandmortyapi.com/api/character")
.then(function (response) {
    console.log(response.data.results);
    response.data.results.forEach(function show (element) {
        return document.querySelector("#result").innerHTML +=
        `
        <div class="renderMain">
            <img class="renderPiece" src="${element.image}">
            <div class="renderText">
                <li>Name: ${element.name}</li>
                <li>Species: ${element.species}</li>
                <li>Status: ${element.status}</li>
            </div>
        </div>
        `
    });

    // var renderedData = `<p>${hi} `
    // results.innerHTML = renderedData;

})




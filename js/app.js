//var appear = document.querySelector("#button").innerHTML;
var result = document.querySelector("#result");
//const search = document.querySelector("#bar");
//var hi = "`https://rickandmortyapi.com/api/character/?names=${search}`";


//function getAPI (APILink) {

   // let request = axios.get(hi)

   function load () {
       
        const text = document.querySelector("#bar").value;
        if (text == "kelii") {
            return window.open("https://dddance.party/");
        }
        else {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`)
        .then(function (response) {
        oof(response);
        console.log(response.data.results);
        })
    }
   }

   function oof (response) {
       console.log(response.data.results);
        result.innerHTML = response.data.results
        .map(function (response) {
            console.log(response.name)
            return `
            <div id="dataContainer">
                <img class="renderImage" src="${response.image}">
                <div class="renderText">
                    <li>Name: ${response.name}</li>
                    <li>Gender: ${response.gender}</li>
                    <li>Species: ${response.species}</li>
                    <li>Status: ${response.status}</li>
                </div>
            </div>

            <br>
            `;


        })
        .join('');


   }








   //Old way
    // axios.get(`https://rickandmortyapi.com/api/character/?names=${search}`)
    // .then(function  (response) {
    //     response.data.results.forEach(function show (element) {
    //         return document.querySelector("#result").innerHTML +=
    //         `
    //         <div class="renderMain">
    //             <img class="renderPiece" src="${element.image}">
    //             <div class="renderText">
    //                 <li>Name: ${element.name}</li>
    //                 <li>Species: ${element.species}</li>
    //                 <li>Status: ${element.status}</li>
    //             </div>
    //         </div>

    //         `
    //     });

    // });
    

    



    //getAPI(hi);

    // var renderedData = `<p>${hi} `
    // results.innerHTML = renderedData;
   // search.addEventListener("keypress")
    



        // var input;
        // var filter;
        // input =  document.querySelector("#bar").innerHTML;
        // filter = input.value.toUpperCase();
        // div = document.querySelector("#dropDown").innerHTML;
        // //a = div.getElementsByTagsName("a");
    
    
    
    
    
//})






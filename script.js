url = 'https://ghibliapi.herokuapp.com/films'


fetch(url)
.then(response => {
        return response.json()
    })
.then(json => {
    console.log(json)
    displayFilms(json)
})


function displayFilms(json){
    // Mononoke
    let title1 = json[8].title;
    let description1 = json[8].description;
    let runtime1 = json[8].running_time
    document.getElementById("film1").innerText = title1;
    document.getElementById("about1").innerText = description1;
    document.getElementById("runtime1").innerText = "Running Time: " + runtime1 + "min";

    // Spirited
    let title2 = json[10].title;
    let description2 = json[10].description;
    let runtime2 = json[10].running_time
    document.getElementById("film2").innerText = title2;
    document.getElementById("about2").innerText = description2;
    document.getElementById("runtime2").innerText = "Running Time: " + runtime2 + "min";

    //  Howl's
    let title3 = json[12].title;
    let description3 = json[12].description;
    let runtime3 = json[12].running_time
    document.getElementById("film3").innerText = title3;
    document.getElementById("about3").innerText = description3;
    document.getElementById("runtime3").innerText = "Running Time: " + runtime3 + "min";

    // Totoro
    let title4 = json[2].title;
    let description4 = json[2].description;
    let runtime4 = json[2].running_time
    document.getElementById("film4").innerText = title4;
    document.getElementById("about4").innerText = description4;
    document.getElementById("runtime4").innerText = "Running Time: " + runtime4 + "min";

    // Cat Returns
    let title5 = json[11].title;
    let description5 = json[11].description;
    let runtime5 = json[11].running_time
    document.getElementById("film5").innerText = title5;
    document.getElementById("about5").innerText = description5;
    document.getElementById("runtime5").innerText = "Running Time: " + runtime5 + "min";

    // Arrietty
    let title6 = json[15].title;
    let description6 = json[15].description;
    let runtime6 = json[15].running_time
    document.getElementById("film6").innerText = title6;
    document.getElementById("about6").innerText = description6;
    document.getElementById("runtime6").innerText = "Running Time: " + runtime6 + "min";

    // Marnie
    let title7 = json[19].title;
    let description7 = json[19].description;
    let runtime7 = json[19].running_time
    document.getElementById("film7").innerText = title7;
    document.getElementById("about7").innerText = description7;
    document.getElementById("runtime7").innerText = "Running Time: " + runtime7 + "min";

    // Pom Poko
    let title8 = json[6].title;
    let description8 = json[6].description;
    let runtime8 = json[6].running_time
    document.getElementById("film8").innerText = title8;
    document.getElementById("about8").innerText = description8;
    document.getElementById("runtime8").innerText = "Running Time: " + runtime8 + "min";

    // Ponyo
    let title9 = json[14].title;
    let description9 = json[14].description;
    let runtime9 = json[14].running_time
    document.getElementById("film9").innerText = title9;
    document.getElementById("about9").innerText = description9;
    document.getElementById("runtime9").innerText = "Running Time: " + runtime9 + "min";

    // Kaguya
    let title10 = json[18].title;
    let description10 = json[18].description;
    let runtime10 = json[18].running_time
    document.getElementById("film10").innerText = title10;
    document.getElementById("about10").innerText = description10;
    document.getElementById("runtime10").innerText = "Running Time: " + runtime10 + "min";
}




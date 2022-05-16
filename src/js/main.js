
mapboxgl.accessToken = 'pk.eyJ1IjoiYmhkZmdlbmVyYWwiLCJhIjoiY2wzNWJrc2U0MGFwbjNkbXBtbnBkMjVvdSJ9.J7hpahoJVbj48EFRFfQKfg';

const start = [-105, 24];
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bhdfgeneral/cl36xkmzk000c14qli8s6hjli',
    center: start,
    zoom: 4.2
});


const markersInfo = () => {
    let marker = [];

    fetch("./animales.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        for (let i = 0; i < data.length; i++) {
            marker[i] = data[i];

            if (i == (data.length - 1)) {
                markersPrint(marker);
            }
        }
    })
}


const markers = markersInfo()

const markersPrint = (valueMarkers) => {
    let markers = valueMarkers;
    let index = 0;

    for (const marker of markers) {
        let atajo = marker.location[0]
        let coords = atajo.center;
        index++;

        fixcoords = [coords[1], coords[0]]

        const el = document.createElement('div');
        el.id = 'fly'
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.image})`
        el.style.width = `60px`;
        el.style.height = `60px`;
        el.style.backgroundSize = '130%';

        el.addEventListener('click', () => {
            fly(atajo, marker.title, marker.scientificName);
        });

        // Add markers to the map.
        new mapboxgl.Marker(el)
            .setLngLat(fixcoords)
            .addTo(map);

        listAnimals(index, marker.title)
    }
}



const fly = (locationCoords, nombre, nombrecientifico) => {
    let coordsFly = locationCoords.center;
    fixcoordsFly = [coordsFly[1], coordsFly[0]];

    const end = fixcoordsFly;

    map.flyTo({
        center: end,
        zoom: 6,
        bearing: 0,

        speed: .5, // make the flying slow
        curve: 2, // change the speed at which it zooms out

        easing: (t) => t,

        essential: true
    });

    document.getElementById("animalName").style.display = "block";

    const title = `${nombre}`;
    const scientific = `${nombrecientifico}`
    const container = document.getElementById("animalText");

    container.innerHTML = `<h1>${title}</h1><p>${scientific}   <a href="./app/enciclopedia/enciclopedia.html">Ver recorrido virtual</a></p>`;

};

const close = () => {

}

let estado = "open"

function showHideSideBar() {

    if (estado == "open") {
        document.getElementById("sideBar").style.width = "50px";
        document.getElementById("intro").style.display = "none";
        document.getElementById("menuAnimals").style.display = "block";

        estado = "close";
    }
    else if (estado == "close") {
        document.getElementById("sideBar").style.width = "600px";
        document.getElementById("intro").style.display = "block";
        document.getElementById("menuAnimals").style.display = "none";

        estado = "open";
    }
}


const listAnimals = (index, title) => {

    const ListContainer = document.getElementById("listOfAnimalNames")

    const LiElement = document.createElement("li");
    LiElement.innerHTML = `<i class="fa-solid fa-fish-fins"></i> <a href="#" onclick="animalLiFunction(${index})">${title}</a>`;

    ListContainer.appendChild(LiElement);
}

const animalLiFunction = (i) => {

    fetch("./animales.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {

        animalList = data[i - 1];
        console.log(animalList)

        let atajoList = animalList.location[0];
        fly(atajoList, animalList.title, animalList.scientificName);
    })
}


let estadoLat = "open";

function showHideLateral() {

    if (estadoLat == "open") {
        document.getElementById("menuAnimals").style.width = "45px";
        document.getElementById("menuAnimals").style.marginLeft = "5px";
        document.getElementById("menuAnimals").style.left = "0px";
        document.getElementById("menuAnimals").style.border = "0px solid #000000";
        document.getElementById("menuAnimals").style.borderRadius  = "0px";
        document.getElementById("listOfAnimalNames").style.display = "none";
        document.getElementById("listButton").style.boxShadow="none";
        document.getElementById("listButton").style.borderRadius="10px";
        estadoLat = "close";
    }
    else if (estadoLat == "close") {
        document.getElementById("menuAnimals").style.width = "300px";
        document.getElementById("menuAnimals").style.left = "5%";
        document.getElementById("menuAnimals").style.border = "1px solid var(--color_second)";
        document.getElementById("menuAnimals").style.borderRadius  = "20px";
        document.getElementById("listOfAnimalNames").style.display = "block";
        document.getElementById("listButton").style.boxShadow="-3px -3px 16px var(--color_shadow)";
        document.getElementById("listButton").style.borderRadius="0 18px 0 18px";
        estadoLat = "open";
    }
}
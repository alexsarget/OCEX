mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2tka25pZ2h0IiwiYSI6ImNsMzR5MnBtYjAwZzUzaW9ibTg2dmVmZm0ifQ.0t-OOaupeo1KtAAkmxYcAQ';
const start = [-105, 24];

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: start,
zoom: 4.2
});


const markersInfo=()=>{
    let marker=[];
    fetch("./animales.json").then(function (resp) {
        return resp.json();
    }).then(function (data){
        
        for (let i=0; i<data.length; i++){
            marker[i]=data[i];

            if(i==(data.length-1)){
                markersPrint(marker);
            }
        }
  
    })
    
}


const markers=markersInfo()
console.log(markers)

const markersPrint=(valueMarkers)=>{

    let markers=valueMarkers;
    let index=0;

    for (const marker of markers) {
        // Create a DOM element for each marker.
        let atajo=marker.location[0]
        let coords=atajo.center;
        index++;

        fixcoords=[coords[1],coords[0]]
        console.log(fixcoords)
        console.log("su index es de "+index)
        
        const el = document.createElement('div');
        el.id='fly'
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.image})`
        el.style.width = `60px`;
        el.style.height = `60px`;
        el.style.backgroundSize = '130%';
         
        el.addEventListener('click', () => {
            fly(atajo,marker.title,marker.scientificName);
        });
         
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(fixcoords)
        .addTo(map);

        listAnimals(index,marker.title)
        }
    
}



const fly =(locationCoords, nombre, nombrecientifico)=>{

    let coordsFly=locationCoords.center;
        
    fixcoordsFly=[coordsFly[1],coordsFly[0]]
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
            
            document.getElementById("animalName").style.display="block";

            let title=`${nombre}`;
            let scientific=`${nombrecientifico}`

            const container=document.getElementById("animalText");
            container.innerHTML=`<h1>${title}</h1><p>${scientific}<a href="www.google.com">Ver info</a></p>`;

    };

const close=()=>{
    
}

let estado="open"

function showHideSideBar(){

    if(estado=="open"){
        document.getElementById("sideBar").style.width="30px";
        document.getElementById("intro").style.display="none";
        document.getElementById("menuAnimals").style.display="block";
        
    estado="close";
    }
    else if(estado=="close"){
        document.getElementById("sideBar").style.width="600px"; 
        document.getElementById("intro").style.display="block";  
        document.getElementById("menuAnimals").style.display="none";
        
    estado="open";
    }
}


const listAnimals=(index,title)=>{

    const ListContainer=document.getElementById("listOfAnimalNames")
     
    const LiElement=document.createElement("li");
    LiElement.innerHTML=`<a href="#" onclick="animalLiFunction(${index})">${title}</a>`;
    
    ListContainer.appendChild(LiElement);
}

const animalLiFunction =(i)=>{

    fetch("./animales.json").then(function (resp) {
        return resp.json();
    }).then(function (data){
        
        animalList=data[i-1];
        console.log(animalList)
        
        let atajoList=animalList.location[0];
        fly(atajoList,animalList.title,animalList.scientificName);
    })
}


let estadoLat="open";

function showHideLateral(){

    if(estadoLat=="open"){
        document.getElementById("menuAnimals").style.width="45px";
        document.getElementById("menuAnimals").style.left="2px";
        document.getElementById("menuAnimals").style.border="0px solid #000000";
        document.getElementById("listOfAnimalNames").style.display="none";
        estadoLat="close";
    }
    else if(estadoLat=="close"){
        document.getElementById("menuAnimals").style.width="300px"; 
        document.getElementById("menuAnimals").style.left="5%";
        document.getElementById("menuAnimals").style.border="3px solid var(--color_second)";
        document.getElementById("listOfAnimalNames").style.display="block";  
        estadoLat="open";
    }
}
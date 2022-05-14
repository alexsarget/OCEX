mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY2tka25pZ2h0IiwiYSI6ImNsMzR5MnBtYjAwZzUzaW9ibTg2dmVmZm0ifQ.0t-OOaupeo1KtAAkmxYcAQ';
const start = [-103, 24];

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: start,
zoom: 4.6
});


const markersInfo=()=>{
    let marker=[];
    fetch("./animals.json").then(function (resp) {
        return resp.json();
    }).then(function (data){
        
        for (let i=0; i<data.length; i++){
            marker[i]=data[i];

            if(i==(data.length-1)){
                markersPrint(marker);
            }
        }
  
    })
    return marker;
}

const MarkersInfo2=[
    {
        "animal":"vaca marina",
        "cientifico":"vacus marinus",
        "coords":[-100, 20],
        "img":"https://blog.dolphindiscovery.com.mx/wp-content/uploads/2021/07/datos-curiosos-vaquita-marina.jpg"

    },
    {
        "animal":"tortuga",
        "cientifico":"tortugutus",
        "coords":[-95, 27],
        "img":"https://wwflac.awsassets.panda.org/img/turtles_hero_563115.jpg"

    },
    {
        "animal":"ballena jorobada",
        "cientifico":"ballenutus",
        "coords":[-114, 20],
        "img":"https://t2.ea.ltmcdn.com/es/razas/6/4/7/ballena-jorobada_746_0_600.jpg"

    }

]

const markers=markersInfo()
console.log(markers)

const markersPrint=(valueMarkers)=>{
    let markers=valueMarkers
    for (const marker of markers) {
        // Create a DOM element for each marker.
        console.log(marker)
        const el = document.createElement('div');
        el.id='fly'
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.img})`
        el.style.width = `60px`;
        el.style.height = `60px`;
        el.style.backgroundSize = '130%';
         
        el.addEventListener('click', () => {
            fly(marker.coords);
        });
         
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(marker.coords)
        .addTo(map);
        }
    
        let isAtStart = true;
}

let isAtStart = true;
const fly =(coords)=>{
    const end = coords;
    
    const target = isAtStart ? end : start;

    isAtStart = !isAtStart;

    if(isAtStart==true) {
        map.flyTo({
    
            center: start,
            zoom: 4.6,
            bearing: 0,
             
            speed: 2, // make the flying slow
            curve: .5, // change the speed at which it zooms out
             
            easing: (t) => t,
             
            essential: true
            });
    }else if(isAtStart==false) {
        map.flyTo({
    
            center: end,
            zoom: 9,
            bearing: 0,
             
            speed: 2, // make the flying slow
            curve: .5, // change the speed at which it zooms out
             
            easing: (t) => t,
             
            essential: true
            });
    }
     
    
     
    
    };

const close=()=>{
    
}
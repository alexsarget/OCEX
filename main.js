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


const markers=markersInfo()
console.log(markers)

const markersPrint=(valueMarkers)=>{
    let markers=valueMarkers
    for (const marker of markers) {
        // Create a DOM element for each marker.
        let atajo=marker.location[0]
        let coords=atajo.center;
        
        const el = document.createElement('div');
        el.id='fly'
        el.className = 'marker';
        el.style.backgroundImage = `url(${marker.image})`
        el.style.width = `60px`;
        el.style.height = `60px`;
        el.style.backgroundSize = '130%';
         
        el.addEventListener('click', () => {
            fly(coords);
        });
         
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(coords)
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
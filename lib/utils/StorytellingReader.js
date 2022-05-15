var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiYmhkZmdlbmVyYWwiLCJhIjoiY2wzNWJrc2U0MGFwbjNkbXBtbnBkMjVvdSJ9.J7hpahoJVbj48EFRFfQKfg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'LA EXTINCIÓN ANIMAL DE LAS ESPECIES MEXICANAS',
    subtitle: 'Los científicos estiman que los animales en peligro de extinción en méxico es solo cuestión de tiempo',
    byline: 'Una extinción inminente',
    footer: 'OCEX | Hack The Ocean',
    chapters: [
        {
            id: "VaquitaMarina",
            alignment: "left",
            hidden: false,
            title: "Vaquita Marina",
            scientificName: "Phocoena sinus",
            family: "Phocoenidae",
            image: "../../assets/img/story-1-img.jpg",
            description: "Es uno de los cetáceos más pequeños del mundo, único mamífero marino mexicano miembro de la familia Phocoenidae (marsopas verdaderas), esta especie es endémica de México, habita en el norte del Golfo de California",
            percent20years: "500",
            percentNow: "20",
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }

            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
        },
        {
            id: 'totoaba ',
            alignment: 'right',
            hidden: false,
            title: 'Totoaba',
            scientificName: "Phocoena sinus",
            image: '../../assets/img/story-2-img.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tortuga-carey',
            alignment: 'left',
            hidden: false,
            title: 'Tortuga carey',
            scientificName: "Phocoena sinus",
            image: '../../assets/img/story-3-img.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ballena-azul',
            alignment: 'fully',
            hidden: false,
            title: 'Ballena Azul',
            scientificName: "Phocoena sinus",
            image: '../../assets/img/story-4-img.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ],
};



const Reader=require("./../utils/reader")
const file= "./animals.json"

const animalData=Reader.sendData(file);

class MarkersInfo{
    static AlleMarkers(){
        const markers=[]

        for (let i=0; i<animalData.length; i++) {
            let marker={};

            marker.img=`url(${animalData[i].img})`
            marker.coords=animalData[i].coords

            markers[i]=marker

            if(i==(animalData.length-1)){
                console.log(markers)
                return markers;
            }
        }   
    }
}
module.exports=MarkersInfo;
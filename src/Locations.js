import React,{useState} from "react";
import Winter from "./images/Winter.jpg"
import Summer from "./images/Summer.jpg"




const Locations = ()=>{
    const [latitude,setLatitude] = useState(0)
    const [longitude,setLongitude] = useState(0)
    const [Hemisphere,setHemisphere] = useState("")
    const [month,setMonth] = useState(new Date().getMonth()+1)

    function toFindLOcation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    if(position.coords.latitude > 0){
                        setHemisphere("Northern Hemisphere")
                    }else if(position.coords.longitude < 0){
                        setHemisphere("Southern Hemisphere")
                    }else{
                        setHemisphere("Equater")
                    }
                }
            )
            
        }
    }


    return (
        <div>
            <p>latitude : {latitude}</p>
            <p>longitude:{longitude}</p>
            <p>Hemisphere:{Hemisphere}</p>
            <p>Date:{month}</p>
            <button onClick={toFindLOcation}>Location</button>
            {
                Hemisphere ?
                (Hemisphere && ((Hemisphere == "Northern Hemisphere" && (month >= 11 || month <= 3)) || 
                (Hemisphere == "Southern Hemisphere" && (month >= 5 || month <= 9)))
                && (
                    <div>
                        <h1>Winter Season</h1>
                        <img src={Winter} alt="winter_img"/>
                    </div>
                )):
                (Hemisphere && (Hemisphere == "Northern Hemisphere" && ((month >= 5) || (month <= 9))) ||
                (Hemisphere == "Southern Hemisphere" && ((month >= 11) || (month <= 3 )))
                && (
                    <div>
                        <h1>Summer Season</h1>
                        <img src={Summer} alt="Summer_img"/>
                    </div>
                ))
            }
        </div>
    )
}


export default Locations
import { useEffect, useState } from "react"
import { url } from "../App";




export const Album = () => {

    return (
        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"auto"}}>
                <h1>EVENTO</h1>
                <hr/>
            </div>

            <FotosTomadas />

    </div>
    )
}



const FotosTomadas = () => {

    const [fotos, setFotos] = useState <string []>([])

    useEffect(() => {

        const axios = require('axios');
        axios({
            url:url+"dowloadAll",
            method:'GET',
            headers: {"content-type": "multipart/form-data"},
            }).then(function(res: any){

                console.log("lo que llego es: "+res.data)
                      
            }).catch((error: any) =>{
            //Network error comes in
            });       
    
        
      },[]);

      return (
<div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>

</div>
      )


}
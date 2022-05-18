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
    let uniqueKey=0 

    useEffect(() => {

        const axios = require('axios');
        axios({
            url:url+"dowloadAll",
            method:'GET',
            headers: {"content-type": "multipart/form-data"},
            }).then(function(respuesta: any){


                const datos=respuesta.data[0]
                console.log("lo que llego es: "+datos.foto)


                setFotos(array => [...array, datos])

                      
            }).catch((error: any) =>{
            //Network error comes in
            });       
    
        
      },[]);

      return (
<div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>

        {(fotos || []).map((a) => {
                        uniqueKey=uniqueKey+1
                        return (
                            <img key={uniqueKey} style={{margin:"15px 0px 15px 0px"}} src={a} />
                            ) 
                        })
                    }
</div>
      )


}
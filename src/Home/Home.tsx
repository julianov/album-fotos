
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

    return (

        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", justifyContent:"center", alignItems:"center" }}>

        <header id="Home-header">
            <p>
                ÁLBUM DE FOTOS
            </p>
        </header>
        <div style={{ border:"solid", borderColor:"red", display: "flex", flexDirection: "column", width: "100%", height: "100%", justifyContent:"center", alignItems:"center" }}>
        
        <Link to={"/upload"} style={{margin:"25px 0px 25px 0px"}}>SUBIR FOTOS</Link>

        <Link to={"/album"} style={{margin:"25px 0px 25px 0px"}}>VER ALBUM</Link>



            </div>
    </div>
    )
}
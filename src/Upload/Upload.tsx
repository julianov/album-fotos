import React, { useEffect, useState } from 'react';
import './Upload.css';




export const Upload = () => {

    const [cantidadImangenes, setCantidadImagenes]=useState(0)
    const [fotos, setFotos] = useState <string []>([])
    const [nombreFoto, setNombreFoto] = useState("")

    let uniqueKey=0 

    const onImageChange = (event:any) => {
        if (event.target.files && event.target.files[0]) {

          setCantidadImagenes(event.target.files.length)

          for (let i=0; i< event.target.files.length;i++){
            let img = event.target.files[i];
            
            setFotos(array => [...array, URL.createObjectURL(img)])
          }
          
        }
      };


      useEffect(() => {
        if(cantidadImangenes==0){
            setFotos([])
        }
      },[cantidadImangenes]);


      if (cantidadImangenes==0){
        return(

            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100vh"}}>

                
                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"auto"}}>
                     
                    <h1>INGRESE FOTO</h1>
                </div>
                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                    <div className="image-upload">
                        <label htmlFor="file-input" style={{width:"100%", height:"100%"}}>
                            <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"/>
                        </label>

                        <input id="file-input" style={{width:"100%", height:"100%", border:"solid", borderColor:"black"}} type="file" multiple accept="image/*" onChange={onImageChange} />
                    </div>
                </div>
            </div>
        )
      }else if(cantidadImangenes==1){
        return(

            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>

                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"auto"}}>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"auto", justifyContent:"left"}} onClick={()=>setCantidadImagenes(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </div> 
                    
                    <h1>FOTO SELECCIONADA</h1>
                </div>
                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems:"center"}}>

                    <img src={fotos[0]} />
                    <hr/>

                    <h2>DESCRIPCION:</h2>
                    <textarea style={{width:"75%", marginBottom:"25px"}}  onChange={onImageChange} />
                    
                    <hr/>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems:"center", margin:"25px 0px 25px 0px"}}>
                        <button className='btn-upload'>SUBIR</button>
                        <button className='btn-borrar'>ELIMINAR</button>
                    </div>
                </div>
            </div>
        )
      }else{
        return(

            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>

                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"auto"}}>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"auto", justifyContent:"left"}} onClick={()=>setCantidadImagenes(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                    </div> 
                    <h1>FOTOS SELECCIONADAS</h1>
                </div>
                <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems:"center"}}>

                    <hr/>

                    {(fotos || []).map((a) => {
                        uniqueKey=uniqueKey+1

                        return (
                        
                            <img key={uniqueKey} style={{margin:"15px 0px 15px 0px"}} src={a} />
                            ) 
                        })
                    }
                    
                    <hr/>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems:"center", margin:"25px 0px 25px 0px"}}>
                        <button className='btn-upload'>SUBIR</button>
                        <button className='btn-borrar'>ELIMINAR</button>
                    </div>
                </div>
            </div>
        )
      }
     
    

}
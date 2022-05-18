import React, { useEffect, useState } from 'react';
import { url } from '../App';
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
            //setFotos(array => [...array, URL.createObjectURL(img)])

            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                setFotos(array => [...array, String(reader.result)])

            };
            reader.readAsDataURL(event.target.files[i]);
            //setFotos(array => [...array, URL.createObjectURL(img)])
          }
        }
      };

     const subirFotos= () => {
        if (fotos.length>0){
            enviarFotos(fotos)
        }
      }

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
                        <button className='btn-upload' onClick={ ()=>subirFotos()}>SUBIR</button>
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
                    <button className='btn-upload' onClick={ ()=>subirFotos()}>SUBIR</button>

                    {(fotos || []).map((a) => {
                        uniqueKey=uniqueKey+1
                        return (
                            <img key={uniqueKey} style={{margin:"15px 0px 15px 0px"}} src={a} />
                            ) 
                        })
                    }
                    
                    <hr/>
                    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems:"center", margin:"25px 0px 25px 0px"}}>
                        <button className='btn-borrar'>BORRAR TODO</button>
                    </div>
                </div>
            </div>
        )
      }
     
    

}


const enviarFotos = async (fotos:any []) =>{

    if(fotos.length>0){

        var formDataToUpload = new FormData();
        formDataToUpload.append("cantidad", String(fotos.length))

        for (let i=0; i<fotos.length;i++){
            

           // const fotuli=fotos[i].split(";")[1]
            var block = fotos[i]!.split(";");
            var contentType = block[0].split(":")[1];
            var realData = block[1].split(",")[1];
            var blob = b64toBlob(realData, contentType,1);
            formDataToUpload.append("imagen"+String(i), blob)
            //console.log(fotuli)
            console.log("imagen"+{i})
            console.log("cantidad:"+{i})
        }
        //formDataToUpload.append("imagen", (fotos[0]))


        console.log(fotos[0])
        const axios = require('axios');
        axios({
            url:url+"upload",
            method:'POST',
            headers: {"content-type": "multipart/form-data"},
            data:formDataToUpload
            }).then(function(res: any){

                console.log("lo que llego es: "+res.data)
                      
            }).catch((error: any) =>{
            //Network error comes in
            });       
    }
   
}


  
export function b64toBlob(b64Data: string, contentType: string, sliceSize: number) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

export function strToBlob(b64Data:any) {
  
var blob = new Blob(b64Data);
return blob;
}

export function _base64ToArrayBuffer(str:string) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      result.push(str.charCodeAt(i).toString(2));
    }
    return result;
}
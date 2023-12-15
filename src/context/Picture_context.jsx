import { createContext, useState, useEffect} from "react";
import axios from 'axios';
const PHOTO_URL = "/photos.json";

export const Pictures_context = createContext();

const Picture_provider = ({ children }) => {
    const [Pictures, setPictures] = useState([])


    // const getphotos = async () => {
    //     try {
    //         const response = await axios.get(PHOTO_URL)
    //         if (response.status!==200){
    //             throw new Error('Hay problemas con la API')
    //         }
    //         const { photos: photosDB } = response.data
    //         setimagenes(photosDB.map((photo) => ({ ...photo, isLiked: false})))
    //         console.log('This is the context data:', imagenes)
    //         console.log('This is the response:', photosDB)
    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }

    const Photos_data = async () => {
        try {
             const resolution=await fetch(PHOTO_URL)

             if(!resolution.ok){
                 throw new Error ("Hay un error en la data");
             }
            //  console.log("respuesta de la api", resolution)
            
             const data =await resolution.json();
            //  console.log('this is data', data);
             const Pictures_data = data.photos;
            //  console.log('this is picture_data', Pictures_data);
             setPictures(data.photos)
            //  console.log('context data: ', Pictures)
         } catch(error){
             console.error({message:error})
         }
     }

    useEffect(() =>{
        Photos_data();
    }, []);

    return (
        <Pictures_context.Provider value={{Pictures, setPictures}}>
            {children}
        </Pictures_context.Provider>
    )
}

export default Picture_provider
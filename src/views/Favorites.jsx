import { useContext } from "react";
import IconHeart from "../components/IconHeart";
import { Pictures_context } from "../context/Picture_context";

const Favorites = () => {
  const {Pictures, setPictures} = useContext(Pictures_context)
  const addlike = (id) => {
    // console.log('Data before change: ', Pictures)
    const newpictures = Pictures.map((picture)=> {
      if(picture.id===id) {
        return {
          ...picture, liked: !picture.liked
        }
      }
      return picture
      }
    )
    setPictures(newpictures)
    // console.log('Data after change: ', Pictures)
  }
  return (
    <div>
      <h1 className="App">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
          {Pictures.map((picture) => {
            if (picture.liked===true){
              return(
                <div onClick={() => addlike(picture.id)} className="photo" style={{backgroundImage: `url(${picture.src.medium})`}} key={picture.id}>
                  <IconHeart filled={picture.liked} /> {/* aquí se utiliza la info sobre la foto para mostrar el corazón relleno o no según si tiene like o no */}
                  <section>
                    <p> {picture.alt} </p> {/* aquí se inserta la descripción de la fotografía */}
                    {/* aquí se podría agregar más info sobre la foto */}
                  </section>
                </div>
              )
            }
          })
          }
      </div>
    </div>
  );
};
export default Favorites;

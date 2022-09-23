import { useEffect, useState } from 'react';
import { getGifs } from "../helperes/getGifs";
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
const {images, isLoading} = useFetchGifs (category);

console.log({ images,isLoading})
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading
                // ? <h2>Cargando...</h2>
                // : null

            isLoading && <h2>Cagando..</h2>
            }
            <div className='card-grid'>
                {

                    // images.map(({id,title})=>(
                        images.map(( image ) => (
                        <GifItem 
                    key = {image.id}
                    { ...image}
                        // title = { image.title } igual a spread operator
                        // url= {image.url} />
                        // <li key={id}>{title}</li>
                        />
                    ))
                    // images.map(img => (
                    //     <li key={img.id}>{img.title}</li>
                    // ))
                }
            </div>

        </>
    )
}

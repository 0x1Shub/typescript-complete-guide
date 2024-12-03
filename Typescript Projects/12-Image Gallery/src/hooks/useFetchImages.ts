import { useEffect, useState } from "react";
import axios from 'axios';

interface Image {
    id: string;
    urls: {small: string};
    alt_description : string;
}


export const useFetchImages = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try{
                const response = await axios.get('https://api.unsplash.com/photos', {
                    headers: {
                        Authorization: `Client-ID YOUR_UNSPLASH_ACCESS_KEY`,
                    },
                });
                setImages(response.data);
            }catch(err){
                setError('Failed to fetch images.');
            }
            finally{
                setLoading(false);
            }
        };
        fetchImages();
    }, [])


    return {images, loading, error};
}   
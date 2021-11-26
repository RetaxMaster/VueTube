// Traemos el método post de 'axios'
import { get } from 'axios'

// Las variables de entorno deben iniciar con VUE_APP_, de lo contrario no serán detectadas.
const API_KEY = process.env.VUE_APP_YT_API_KEY;
const API_URL = "https://www.googleapis.com/youtube/v3/search";

function searchVideo(query) {

    const request = {
        "key": API_KEY,
        "part": "snippet",
        "type": "video",
        "maxResults": 10,
        "fields": "items/id/videoId,items/snippet/thumbnails/high/url,items/snippet/title,items/snippet/description",
        "q": query
    }

    const url = new URL(API_URL);
    Object.keys(request).forEach(key => url.searchParams.append(key, request[key]));

    return get(url);
    
}

// Exportamos la función para usarla cuando queramos
export {
    searchVideo
}
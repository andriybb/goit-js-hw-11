import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY; 


export function getImagesByQuery(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  return axios.get(url).then(response => response.data);
}

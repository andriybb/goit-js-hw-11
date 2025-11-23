import axios from 'axios';

const API_KEY = '53377431-d26a2ee1aab1def8444b1097c'; 

export function getImagesByQuery(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  return axios.get(url).then(response => response.data);
}
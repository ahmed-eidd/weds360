import axios from 'axios';


export const fetchGallery = () => axios.get('https://jsonplaceholder.typicode.com/posts')
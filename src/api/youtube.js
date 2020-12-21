import axios from 'axios';

const KEY = 'AIzaSyBPlFOZATB7TIJG8npIIIZfJbbDCUL-TTw'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults : 5,
        key: KEY
    }
})
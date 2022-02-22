import axios from 'axios';

const KEY = 'AIzaSyAZbZq1ElLVtAUn6OGtGmum_-UYGFV1oa0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})
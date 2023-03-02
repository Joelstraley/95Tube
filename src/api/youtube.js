import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipper',
        maxResults: 5,
        key: import.meta.env.VITE_MY_API_KEY
    }
})
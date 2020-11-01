import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-665e0.cloudfunctions.net/api' // THE API (Cloud function) URL
    // 'http://localhost:5001/clone-665e0/us-central1/api'
})

export default instance
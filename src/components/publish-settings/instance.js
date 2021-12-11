import axios from "axios";  
export default axios.create(
    {
        baseURL: 'https://udevs-ecccd-default-rtdb.firebaseio.com/'
    }
)
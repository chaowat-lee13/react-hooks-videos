import axios from "axios";

const KEY = "AIzaSyCRvJZXCsTQJnsxu0cpmc0BqPwdE15sniA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})
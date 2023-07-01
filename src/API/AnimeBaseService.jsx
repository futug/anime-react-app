import axios from "axios";
export default class AnimeBaseService {
    static async getAll() {
        try {
            const response = await axios.get("https://api.jikan.moe/v4/top/anime");
            return response.data.data;
        } catch (e) {
            console.log("Fetching error");
        }
    }
}

import axios from "axios";
export default class AnimeBaseService {
    static async getAll() {
        try {
            const response = await axios.get("https://futug.github.io/freelancepharmacy/anime-api.json");
            return response.data;
        } catch (e) {
            console.log("Fetching error");
        }
    }
}

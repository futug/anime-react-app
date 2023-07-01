import axios from "axios";
export default class GenreBaseService {
    static async getGenre() {
        try {
            const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
            return response.data.data;
        } catch (e) {
            console.log("Fetching error");
        }
    }
}

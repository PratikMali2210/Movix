import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTIxYjgxYWU2MDEyNWM0Nzg3NDc1MGFkMjBjNDlhMSIsInN1YiI6IjY2NWVhMjRiYjhkMjEzOTE5YjFjMzAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UkrorSgC3vVtEx0J1Piqn7y5l381Lv4m-92fYrAd83k";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

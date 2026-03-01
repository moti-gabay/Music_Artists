import { Aritest, Track } from "../typs/types";

const API_URL = "https://www.theaudiodb.com/api/v1/json/123";

const TOP_TRACK_URL = API_URL + "/track-top10.php?s=";

export const getAritestByName = async (aritestName: string) => {
    try {
        const res = await fetch(`${API_URL}/search.php?s=${aritestName}`);
        const { artists } = await res.json();
        return artists[0]
    } catch (error) {
        console.error(error)
    }
}

export const getTopTracks = async (aritestName: string): Promise<Track[]> => {
    try {
        const res = await fetch(TOP_TRACK_URL + aritestName);
        const { track } = await res.json();
        return track || []
    } catch (error) {
        console.error(error)
        return []
    }
}
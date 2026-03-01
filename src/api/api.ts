import { Aritest, Track } from "../typs/types";

const API_URL = "https://www.theaudiodb.com/api/v1/json/2";

export const getAritestByName = async (aritestName: string): Promise<Aritest | null> => {
    try {
        const res = await fetch(`${API_URL}/search.php?s=${aritestName}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        if (data.artists && data.artists.length > 0) {
            return data.artists[0];
        }
        return null;
    } catch (error) {
        console.error("Error fetching artist:", error);
        return null;
    }
}

export const getTopTracks = async (aritestName: string): Promise<Track[]> => {
    try {
        const res = await fetch(`${API_URL}/track-top10.php?s=${aritestName}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        return data.track || [];
    } catch (error) {
        console.error("Error fetching tracks:", error);
        return [];
    }
}
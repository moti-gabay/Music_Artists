import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAritestByName, getTopTracks } from "../../api/api";
import { formtDuration } from "../../utils/utils";
import { Loader } from "../Loader";


const ArtistDetail = () => {

    const { aritestName } = useParams();


    const { } = useQuery({
        queryKey: ['aritest', aritestName],
        queryFn: () => getAritestByName(aritestName),
        enabled: !!aritestName
    })

    const {} = useQuery({
        queryKey:['track',aritestName],
        queryFn:() => getTopTracks(aritestName),
        enabled:!!aritestName,
        select:(data) => data.slice(0,3)
    })

    
    const [aritest, setAritest] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const featchData = async () => {
            try {
                setLoading(true);

                const artistData = await getAritestByName(aritestName);
                const tracksData = await getTopTracks(aritestName);

                setAritest(artistData);
                setTracks(tracksData.slice(0, 3));

            } catch (error) {

                console.error("Error fetching data", error);

            } finally {
                setLoading(false);
            }
        }
        featchData();
        console.log(aritest);







    }, [aritestName]);

    if (loading) return <Loader />

    return (
        <div>
            <h1>info</h1>
            {aritest.map((a) => {
                return (
                    <div key={a.idArtist}>
                        <p>{a.strArtist}</p>
                        <img src={a.strArtistBanner} alt="" />
                        <p>{a.strBiographyEN}</p>
                    </div>
                )
            })}

            <p>Top 3 songs : </p>
            {tracks?.map((t) => {
                return (
                    <div key={t.idTrack}>
                        <p>
                            {t.strArtist}
                        </p>
                        <p>{t.strAlbum}</p>
                        <p>{formtDuration(t.intDuration)}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default ArtistDetail;
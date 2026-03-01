import { useParams } from "react-router-dom";
import { getAritestByName, getTopTracks } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { formtDuration } from "../../utils/utils";
import { Loader } from "../Loader";
import Card from "../card/Card";

const ArtistDetail = () => {
    const { aritestName } = useParams();

    const { data: aritest, isLoading: isLoadingAritest, isError: isAritestError } = useQuery({
        queryKey: ['aritest', aritestName],
        queryFn: () => getAritestByName(aritestName),
        enabled: !!aritestName,
        retry: 1,
    });

    const { data: tracks, isLoading: isLoadingTracks } = useQuery({
        queryKey: ['track', aritestName],
        queryFn: () => getTopTracks(aritestName),
        enabled: !!aritestName,
        select: (data) => data ? data.slice(0, 3) : [],
        retry: 1,
    });

    if (isLoadingAritest || isLoadingTracks) return <Loader />;

    if (isAritestError || !aritest) {
        return <div className="text-red-500 p-6">Artist not found.</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{aritest.strArtist}</h1>

            <img
                className="w-full max-w-md rounded-lg shadow-md mb-4"
                src={aritest.strArtistThumb || aritest.strArtistBanner}
                alt={aritest.strArtist}
            />

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Biography</h2>
                <p className="text-gray-700 leading-relaxed">{aritest.strBiographyEN}</p>
            </div>

            <h3 className="text-2xl font-bold mb-3 border-b pb-2">Top 3 Songs</h3>
            <div className="space-y-4">
                {tracks.map((t) => <Card key={t.idTrack} track={t} />)}
            </div>
        </div>
    );
}

export default ArtistDetail;
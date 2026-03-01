import { useParams } from "react-router-dom";
import { getAritestByName, getTopTracks } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../loader/Loader";
import { Aritest, Track } from "../../typs/types";
import TrackCard from "../TrackCard/TrackCard";

const ArtistDetail = () => {
    const { aritestName } = useParams<{ aritestName: string }>();

    const { data: aritest, isLoading: isLoadingAritest, isError: isAritestError } = useQuery<Aritest | null>({
        queryKey: ['aritest', aritestName],
        queryFn: () => getAritestByName(aritestName!),
        enabled: !!aritestName,

    });

    const { data: tracks, isLoading: isLoadingTracks } = useQuery<Track[]>({
        queryKey: ['track', aritestName],
        queryFn: () => getTopTracks(aritestName!),
        enabled: !!aritestName,
        select: (data) => data ? data.slice(0, 3) : [],
    });

    if (isLoadingAritest || isLoadingTracks) return <Loader message="Loading Artist Details..." />;

    if (isAritestError || !aritest) {
        return <div className="text-red-500 p-6">Artist not found.</div>;
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-900 text-white p-4 md:p-8">
            <div className="max-w-5xl mx-auto">

                <button
                    onClick={() => window.history.back()}
                    className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                    <span className="mr-2">←</span> Back to Search
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    <div className="lg:col-span-1 space-y-4">
                        <div className="relative group">
                            <img
                                src={aritest.strArtistThumb}
                                alt={aritest.strArtist}
                                className="w-full rounded-2xl shadow-2xl border-2 border-blue-500/30 group-hover:border-blue-500 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-2xl"></div>
                            <h1 className="absolute bottom-4 left-4 text-3xl font-black tracking-tighter uppercase italic">
                                {aritest.strArtist}
                            </h1>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">

                        <section className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl">
                            <h2 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                                <span className="mr-2">📖</span> Artist Biography
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {aritest.strBiographyEN}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-purple-400 flex items-center">
                                <span className="mr-2">🎵</span> Top 3 Songs
                            </h2>
                            <div className="grid gap-3">
                                {tracks?.map((t, index) => (
                                    <TrackCard index={index} key={t.idTrack} track={t} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistDetail;

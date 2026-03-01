import { Link } from "react-router-dom"
import { Aritest } from "../../typs/types"

export const AritestCard = ({artist}:{artist:Aritest}) => {
    return (
         <Link to={`/artist/${artist.strArtist}`} className="block group perspective-1000">
                        <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-blue-500/50">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-48 h-48 relative overflow-hidden">
                                    <img
                                        src={artist.strArtistThumb || 'https://via.placeholder.com/400'}
                                        alt={artist.strArtist}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                                </div>

                                <div className="p-6 text-center md:text-left flex-1">
                                    <h2 className="text-3xl font-black italic uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                                        {artist.strArtist}
                                    </h2>
                                    <div className="inline-flex items-center text-blue-500 text-sm font-bold tracking-widest uppercase">
                                        View Artist Profile
                                        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
    )
}
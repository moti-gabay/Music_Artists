import { useState } from "react";
import Card from "../card/Card";
import { getAritestByName } from "../../api/api.js";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [queryName, setQueryName] = useState('');

    const { data: artist, isLoading, isError, isFetching } = useQuery({
        queryKey: ['searchAritest', queryName],
        queryFn: () => getAritestByName(queryName),
        enabled: !!queryName,
        retry: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            setQueryName(searchTerm)
        }
    }

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Music Artist Search</h1>
            <form className="flex gap-2 mb-8" onSubmit={handleSubmit}>

                <input value={searchTerm}
                    className="flex-1 border p-3 rounded-lg text-black focus:ring-blue-500 outline-none"
                    type="text" placeholder="Enter artist name (e.g., Coldplay)"
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold">Search</button>
            </form>
            {(isLoading || isFetching) && queryName && (
                <div className="text-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Searching for {queryName}...</p>
                </div>
            )}

            {isError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Something went wrong. Please try again.
                </div>
            )}
            {artist && !isFetching && <Link to={`/artist/${artist.strArtist}`} className="block group">
                <div className="border rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 bg-white">
                    <img
                        src={artist.strArtistThumb || 'https://via.placeholder.com/400'}
                        alt={artist.strArtist}
                        className=" w-full h-70 object-cover"
                    />
                    <div className="p-5">
                        <h2 className="text-2xl font-bold text-gray-800">{artist.strArtist}</h2>
                        <p className="text-blue-500 text-sm mt-1 font-medium italic">Click to view details →</p>
                    </div>
                </div>
            </Link>}
            {queryName && !artist && !isLoading && !isFetching && (
                <p className="text-center text-gray-500 py-10">No artist found with the name "{queryName}".</p>
            )}
        </div>
    )
}

export default SearchPage;
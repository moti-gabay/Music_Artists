import { useState } from "react";
import { getAritestByName } from "../../api/api.js";
import { useQuery } from "@tanstack/react-query";
import { Aritest } from "../../typs/types.js";
import { Loader } from "../loader/Loader.js";
import { Error } from "../error/Error.js";
import { AritestCard } from "../aritestCard/AritestCard.js";
import { NotFond } from "../notFond/NotFond.js";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [queryName, setQueryName] = useState<string>('');

    const { data: artist, isLoading, isError, isFetching } = useQuery<Aritest | null>({
        queryKey: ['searchAritest', queryName],
        queryFn: () => getAritestByName(queryName),
        enabled: !!queryName,
        retry: 1,
    });



    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            setQueryName(searchTerm)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-900 text-white p-4 md:p-8">
            <div className="max-w-2xl mx-auto pt-12">

                <header className="text-center mb-12">
                    <h1 className="text-5xl font-black tracking-tighter italic uppercase mb-2 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Music Finder
                    </h1>
                    <p className="text-gray-400">Discover your favorite artists and their top hits</p>
                </header>

                <form className="relative group mb-12" onSubmit={handleSubmit}>
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex gap-2">
                        <input
                            value={searchTerm}
                            className="flex-1 bg-black/40 border border-white/10 backdrop-blur-xl p-4 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            type="text"
                            placeholder="Search artist name (e.g., Muse, Rihanna...)"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl transition-all font-bold shadow-lg shadow-blue-900/20 active:scale-95">
                            Search
                        </button>
                    </div>
                </form>

                {(isLoading || isFetching) && queryName && <Loader />}

                {isError && <Error />}

                {artist && !isFetching && <AritestCard artist={artist} />}

                {queryName && !artist && !isLoading && !isFetching && <NotFond aritestName={queryName} />}
            </div>
        </div>
    )
}

export default SearchPage;
import { useEffect, useState } from "react";




const SearchPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("Coldplay")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        // getApiData();

    }
    const getApiData = async () => {
        try {
            setLoading(true);

            const res = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${name}`)

            const { artists } = await res.json();
            console.log(artists);
            setData(artists);
            setLoading(false);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message)
            }
            console.error(err)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {




    }, [])
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error: {error}</h1>
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='NAME...' onChange={(e) => setName(e.target.value)} />
                <button>Submin</button>
            </form>
            <ul>
                {data.length > 0 && data?.map((a, i) => {
                    return (
                        <div key={i}>
                            <p>{a.strArtist}</p>
                            <img src={a.strArtistBanner} alt="" />
                        </div>
                    )
                })}

            </ul>
        </>
    )
}

export default SearchPage;
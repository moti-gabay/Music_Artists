import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";




const SearchPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("Coldplay");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        getApiData();

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
                {data.length > 0 ? data?.map((artist) => <Card key={artist.idArtist} artist={artist} />) :
                    <p>Artist not found</p>}

            </ul>
        </>
    )
}

export default SearchPage;
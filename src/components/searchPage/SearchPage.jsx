import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import { getAritestByName } from "../../api/api.js";
import { Loader } from "../Loader.jsx";




const SearchPage = () => {
    const [aritest, setAritest] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [aritestName, setaritestName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        getApiData();

    }
    const getApiData = async () => {
        try {
            setLoading(true);
            console.log(aritestName);

            const artists  = await getAritestByName(aritestName)
            setAritest(artists);
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


  
    if (loading) return <Loader/>
    if (error) return <h1>Error: {error}</h1>
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='NAME...' onChange={(e) => setaritestName(e.target.value)} />
                <button>Submin</button>
            </form>
            <ul>
                {aritest.length > 0 ? aritest.map((artist) => <Card key={artist.idArtist} artist={artist} />) :
                    <p>Artist not found</p>}

            </ul>
        </>
    )
}

export default SearchPage;
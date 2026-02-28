import { useParams } from "react-router-dom";

const ArtistDetail = () => {

    const { name } = useParams();
    

    return (
        <div>
            <p>{artist.strArtist}</p>
            <img src={artist.strArtistBanner} alt="" />
            <p>{artist.strBiographyEN}</p>
            <p>Top 3 songs : </p>


        </div>
    )
}

export default ArtistDetail;
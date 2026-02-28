import { useNavigate } from "react-router-dom";

const Card = ({ artist }) => {

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/artistDetails/${artist.strArtist}`)} >
            <p>{artist.strArtist}</p>
            <img src={artist.strArtistBanner} alt="" />
        </div>
    )
}

export default Card;
import { Track } from "../../typs/types";
import { formtDuration } from "../../utils/utils";

const Card = ({ track }: { track: Track }) => {


    return (
        <div className="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center">
            <div>
                <p className="font-bold text-lg">{track.strTrack}</p>
                <p className="text-sm text-gray-500">Album: {track.strAlbum}</p>
            </div>
            <p className="text-blue-600 font-mono">{formtDuration(track.intDuration)}</p>
        </div>
    )
}

export default Card;
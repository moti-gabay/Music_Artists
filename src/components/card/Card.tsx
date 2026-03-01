import { Track } from "../../typs/types";
import { formtDuration } from "../../utils/utils";

type CardProps = { index: number, track: Track }


const Card = ({ track, index }: CardProps) => {


    return (
        <div

            className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent hover:from-blue-600/20 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all group"
        >
            <div className="flex items-center gap-4">
                <span className="text-2xl font-black text-white/20 group-hover:text-blue-500 transition-colors">
                    {index + 1}
                </span>
                <div>
                    <p className="font-bold text-white group-hover:text-blue-300 transition-colors">
                        {track.strTrack}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                        Album: {track.strAlbum}
                    </p>
                </div>
            </div>
            <div className="text-right">
                <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {formtDuration(track.intDuration)}
                </span>
            </div>
        </div>
    )
}

export default Card;
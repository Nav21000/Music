import { useParams } from "react-router-dom";
// import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader ,Error, Loader, RelatedSons } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";


const SongDetails = () => {

    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    console.log(songid);
    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData ={songData}/> */}
            
        </div> 
    )
};

export default SongDetails;

import { useContext } from "react";
import { PlayerContext } from "~/contexts/Player.context";

const usePlayer = () => {
    const context = useContext(PlayerContext)

    if(!context){
        throw Error("usePlayer musi znajdowac sie wewnatrz PlayerProvider")
    }

    return context
}

export default usePlayer 
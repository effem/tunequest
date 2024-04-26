import { ForwardIcon } from "@/components/ForwardIcon";
import Player = Spotify.Player;
import { usePlaybackState } from "react-spotify-web-playback-sdk";

export function ForwardButton({player, amount = 10,}: {
    player: Player
    amount?: number
}) {
    const playbackState = usePlaybackState(true, 100);

    return (
        <button
            type="button"
            className="group relative rounded-full focus:outline-none"
            onClick={() => player.seek((playbackState?.position || 0) + amount * 1000)}
            aria-label={`Fast-forward ${amount} seconds`}
        >
            <div className="absolute -inset-4 -left-2 md:hidden"/>
            <ForwardIcon className="h-12 w-12 stroke-slate-500 group-hover:stroke-slate-700"/>
        </button>
    )
}
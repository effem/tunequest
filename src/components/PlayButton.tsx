import { PauseIcon } from '@/components/PauseIcon';
import { PlayIcon } from '@/components/PlayIcon';
import { usePlaybackState } from "react-spotify-web-playback-sdk";

export function PlayButton({player}: { player: Spotify.Player }) {
    const playbackState = usePlaybackState(true, 100);
    let Icon = playbackState?.paused ? PlayIcon : PauseIcon;

    return (
        <button
            type="button"
            className="group relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
            onClick={() => playbackState?.paused ? player.resume() : player.pause()}
            aria-label={playbackState?.paused ? 'Pause' : 'Play'}
        >
            <div className="absolute -inset-3 md:hidden" />
            <Icon className="h-16 w-16 fill-white group-active:fill-white/80" />
        </button>
    )
}

import { usePlaybackState } from "react-spotify-web-playback-sdk";

export default function ProgressBar() {
    const playbackState = usePlaybackState(true, 100);

    return (
        <progress className="rounded-full progress-filled:bg-slate-500 w-full border-slate-500" value={playbackState?.position} max={playbackState?.duration} />
    )
}


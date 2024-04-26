import {useState} from "react";
import {usePlayerDevice, useSpotifyPlayer} from "react-spotify-web-playback-sdk";

export default function PlayerController({token}: {token: string}) {
    const player = useSpotifyPlayer();
    const device = usePlayerDevice();

    const [spotifyUrl, setSpotifyUrl] = useState('');

    const playUri = () => {
        if (device === null) return;

        fetch(
            `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
            {
                method: "PUT",
                body: JSON.stringify({uris: [spotifyUrl]}),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            },
        );
    }


    if (player === null) return null;

    return (
        <div className="flex">
            <div>
                <input type="text" onChange={e => setSpotifyUrl(e.target.value)}/>
                <button onClick={() => playUri()}>
                    <code>Open Url</code>
                </button>
            </div>
            <div>
                <button onClick={() => player.previousTrack()}>
                    <code>player.previousTrack</code>
                </button>
                <button onClick={() => player.togglePlay()}>
                    <code>player.togglePlay</code>
                </button>
                <button onClick={() => player.nextTrack()}>
                    <code>player.nextTrack</code>
                </button>
                <button onClick={() => player.pause()}>
                    <code>player.pause</code>
                </button>
                <button onClick={() => player.resume()}>
                    <code>player.resume</code>
                </button>
                <button onClick={() => player.connect()}>
                    <code>player.connect</code>
                </button>
                <button onClick={() => player.disconnect()}>
                    <code>player.disconnect</code>
                </button>
            </div>
        </div>
    );
};
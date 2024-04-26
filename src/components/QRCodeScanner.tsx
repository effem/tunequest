import {useEffect, useRef, useState} from "react";
import QrScanner from "qr-scanner";

type Props = {
    handleSpotifyTrackId: (result: string) => void;
}

const spotifyRegex = /^(https:\/\/open.spotify.com\/track\/|spotify:track:)([a-zA-Z0-9]+)(.*)$/gm;

export default function QRCodeScanner({handleSpotifyTrackId}: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const scanner = new QrScanner(
            document.getElementsByTagName('video')[0],
            result => {
                const trackId = spotifyRegex.exec(result)?.[2];

                if (trackId) {
                    handleSpotifyTrackId(trackId);
                    scanner.stop();
                }
            },
        )

        scanner.setInversionMode('both');
        scanner.start();
    }, [handleSpotifyTrackId]);

    return (
        <div className="relative">
            <video ref={videoRef} className="fixed right-0 bottom-0 min-w-full min-h-full object-cover"></video>
            <div className="fixed border-2 border-white border-opacity-25 rounded-2xl w-[200px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}
import React from 'react';

export interface AudioPlayerState {
    playerRef: React.RefObject<HTMLAudioElement> | undefined;
    playButtonRef: React.RefObject<HTMLElement | SVGElement> | undefined;
    isPlaying: boolean;
    isLoading: boolean;
    isMuted: boolean;
    volume: number;
    setPlayerRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLAudioElement> | undefined>>;
    setPlayButtonRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLElement | SVGElement> | undefined>>;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
}

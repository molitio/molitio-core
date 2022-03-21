import React from 'react';

export interface AudioPlayerState {
    playerRef?: React.RefObject<HTMLAudioElement> | undefined;
    playButtonRef?: HTMLElement | SVGElement | undefined;
    isPlaying: boolean;
    isMuted: boolean;
    volume?: number;
    isLoading: boolean;
    setPlayerRef: (ref: React.RefObject<HTMLAudioElement> | undefined) => void;
    setPlayButtonRef?: React.Dispatch<React.SetStateAction<HTMLElement | SVGElement> | undefined>;
    setIsPlaying?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: (ev: Event) => void;
    setIsMuted?: React.Dispatch<React.SetStateAction<boolean>>;
    setVolume?: React.Dispatch<React.SetStateAction<number>>;
}

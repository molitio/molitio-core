export type AudioPlayerState = {
    playerRef?: HTMLAudioElement | null;
    playButtonRef?: HTMLElement | SVGGElement | SVGElement | null;
    isPlaying: boolean;
    isMuted: boolean;
    isLoading: boolean;
    volume?: number;
    setPlayerRef: (ref: HTMLAudioElement | null) => void;
    setPlayButtonRef: (ref: HTMLElement | SVGGElement | SVGElement | null) => void;
};

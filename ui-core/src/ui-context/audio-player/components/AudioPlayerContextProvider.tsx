import React from 'react';
import { DeviceContext } from 'ui-context';
import { AudioPlayerState } from '../interfaces/AudioPlayerState';
import { AudioPlayerContext } from './AudioPlayerContext';

export const AudioPlayerContextProvider: React.FC = ({ children }) => {
    const deviceContext = React.useContext(DeviceContext);
    /* 
    const [playerRef, setPlayerRef] = React.useState<React.RefObject<HTMLAudioElement> | undefined>(undefined);
    const [playButtonRef, setPlayButtonRef] = React.useState<React.RefObject<HTMLElement | SVGElement> | undefined>(
        undefined,
    );
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isMuted, setIsMuted] = React.useState<boolean>(true);

    const [volume, setVolume] = React.useState<number>(0); */

    const setIsMuted = (isMuted: boolean) => {
        if (playerState.playerRef?.current) {
            playerState.playerRef.current.muted = playerState.isMuted;
            playerState.playerRef.current.volume = playerState.volume;
            if (playerState.playerRef.current.paused && !playerState.isMuted) {
                playerState.playerRef.current.play();
            }
            setPlayerState({ ...playerState, isPlaying: !playerState.playerRef.current.paused, isMuted: isMuted });
            console.log(`context isMuted: ${isMuted}`);
        }
    };

    const [playerState, setPlayerState] = React.useState<AudioPlayerState>({
        playerRef: undefined,
        playButtonRef: undefined,
        isPlaying: true,
        isLoading: true,
        isMuted: true,
        volume: 0,
        setPlayerRef: setPlayerRef,
        setPlayButtonRef: setPlayButtonRef,
        setIsPlaying: setIsPlaying,
        setVolume: setVolume,
        setIsMuted: setIsMuted,
        setIsLoading: setIsLoading,
    });

    const togglePlayPause = async () => {
        setIsMuted(!isMuted);
    };

    React.useEffect(() => {
        const effect = async () => {
            if (playerRef?.current) {
                console.log(`context isPlaying: ${isPlaying}`);
                isPlaying ? await playerRef.current?.play() : playerRef.current.pause();
                setPlayerState({ ...playerState, isPlaying: isPlaying });
            }
        };
        effect();
    }, [isPlaying]);

    React.useEffect(() => {
        const effect = () => {
            setPlayerState({ ...playerState, isLoading: isLoading });
        };
        effect();
    }, [isLoading]);

    React.useEffect(() => {
        const effect = () => {
            setIsMuted();
        };
        effect();
    }, [playerState.isMuted]);

    React.useEffect(() => {
        const effect = () => {
            if (playerRef?.current) {
                playerRef.current.volume = volume;
                playerRef.current.muted = !(volume > 0);
                setPlayerState({ ...playerState, volume: volume });
            }
        };
        effect();
    }, [volume]);

    React.useEffect(() => {
        const effect = async () => {
            if (playerRef?.current) {
                playerRef.current.onloadstart = () => {
                    console.log(`context onloadstart`);
                    setIsLoading(true);
                };
                playerRef.current.oncanplay = () => {
                    console.log(`context oncanplay`);
                    setIsLoading(false);
                };

                console.log('context starting play');
                setIsPlaying(true);
            }
            setPlayerState({ ...playerState, playerRef: playerRef });
        };
        effect();
    }, [playerRef]);

    React.useEffect(() => {
        const effect = async () => {
            if (playButtonRef?.current) {
                const playButtonCurrent = playButtonRef.current;

                switch (deviceContext.device) {
                    case 'ios':
                    case 'android':
                        playButtonCurrent.onclick = () => {};
                        playButtonCurrent.ontouchstart = () => {
                            console.log('context playbutton ontouchstart');
                            togglePlayPause();
                        };
                        break;
                    default:
                        playButtonCurrent.ontouchstart = () => {};
                        playButtonCurrent.onclick = () => {
                            console.log('context playbutton onclick');
                            togglePlayPause();
                        };
                        break;
                }
                setPlayerState({ ...playerState, playerRef: playerRef });
            }
        };
        effect();
    }, [playButtonRef]);

    return <AudioPlayerContext.Provider value={playerState}>{children}</AudioPlayerContext.Provider>;
};

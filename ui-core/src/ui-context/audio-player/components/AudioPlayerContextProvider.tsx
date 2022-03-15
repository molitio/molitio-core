import React from 'react';
import { AudioPlayerState } from '../interfaces/AudioPlayerState';
import { AudioPlayerContext } from './AudioPlayerContext';

export const AudioPlayerContextProvider: React.FC = ({ children }) => {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [volume, setVolume] = React.useState<number>(0);

    const [playerState, setPlayerState] = React.useState<AudioPlayerState>({
        isPlaying: false,
        isLoading: false,
        volume: 0,
        setIsPlaying: setIsPlaying,
        setVolume: setVolume,
        setIsLoading: setIsLoading,
    });

    React.useEffect(() => {
        const effect = () => {
            setPlayerState({ ...playerState, isPlaying: isPlaying });
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
            setPlayerState({ ...playerState, volume: volume });
        };
        effect();
    }, [volume]);

    return <AudioPlayerContext.Provider value={playerState}>{children}</AudioPlayerContext.Provider>;
};

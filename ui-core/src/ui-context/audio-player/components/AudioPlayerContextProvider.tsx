import React from 'react';
import { AudioPlayerState } from '../interface/AudioPlayerState';
import { AudioPlayerContext } from '../AudioPlayerContext';

export const AudioPlayerContextProvider: React.FC = ({ children }) => {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [volume, setVolume] = React.useState<number>(90);

    const [playerState, setPlayerState] = React.useState<AudioPlayerState>({
        isPlaying: false,
        volume: 100,
        setIsPlaying: setIsPlaying,
        setVolume: setVolume,
    });

    React.useEffect(() => {
        const effect = () => {
            setPlayerState({ ...playerState, isPlaying: isPlaying });
        };
        effect();
    }, [isPlaying]);

    React.useEffect(() => {
        const effect = () => {
            setPlayerState({ ...playerState, volume: volume });
        };
        effect();
    }, [volume]);

    return <AudioPlayerContext.Provider value={playerState}>{children}</AudioPlayerContext.Provider>;
};

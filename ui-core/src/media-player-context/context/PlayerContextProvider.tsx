import { PlayerState } from 'media-player-context/interface/PlayerState';
import React, { useEffect } from 'react';
import { PlayerContext } from './PlayerContext';

export const PlayerContextProvider: React.FC = ({ children }) => {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const [volume, setVolume] = React.useState<number>(90);

    const [playerState, setPlayerState] = React.useState<PlayerState>({
        isPlaying: false,
        volume: 100,
        setIsPlaying: setIsPlaying,
        setVolume: setVolume,
    });

    useEffect(() => {
        const effect = () => {
            setPlayerState({ ...playerState, isPlaying: isPlaying });
        };
        effect();
    }, [isPlaying]);

    useEffect(() => {
        const effect = () => {
            setPlayerState({ ...playerState, volume: volume });
        };
        effect();
    }, [volume]);

    return <PlayerContext.Provider value={playerState}>{children}</PlayerContext.Provider>;
};

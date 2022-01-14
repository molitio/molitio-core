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
            // setIsPlaying(!isPlaying);
            setPlayerState({ ...playerState, isPlaying: isPlaying });
            console.log(`player isPlaying: ${playerState.isPlaying}`);
        };
        effect();
    }, [isPlaying]);

    useEffect(() => {
        const effect = () => {
            //  setVolume(volume);
            setPlayerState({ ...playerState, volume: volume });
            console.log(`set volume: ${playerState.volume}`);
        };
        effect();
    }, [volume]);

    return <PlayerContext.Provider value={playerState}>{children}</PlayerContext.Provider>;
};

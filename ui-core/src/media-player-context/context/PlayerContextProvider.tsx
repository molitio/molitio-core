import { PlayerState } from 'media-player-context/interface/PlayerState';
import React, { useEffect } from 'react';
import { PlayerContext } from './PlayerContext';

export const PlayerContextProvider: React.FC = ({ children }) => {
    const [playerState, setPlayerState] = React.useState<PlayerState>({ isPlaying: false });
    useEffect(() => {
        const playToggle = () => {
            setPlayerState({ isPlaying: !playerState.isPlaying });
              console.log(`player context provider: ${playerState.isPlaying}`);
        };
        playToggle();
    }, [playerState.isPlaying]);

    return <PlayerContext.Provider value={playerState}>{children}</PlayerContext.Provider>;
};

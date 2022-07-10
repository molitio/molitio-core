import React from 'react';
import { TAudioPlayerState } from 'ui-core-schema';

export const AudioPlayerContext = React.createContext<TAudioPlayerState>({
    isPlaying: false,
    isLoading: false,
    isMuted: false,
    volume: 0,
    setPlayerRef: () => {},
    setPlayButtonRef: () => {},
});

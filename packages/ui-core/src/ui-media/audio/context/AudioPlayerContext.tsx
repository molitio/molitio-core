import React from 'react';
import { AudioPlayerState } from '@molitio/molitio-schema';

export const AudioPlayerContext = React.createContext<AudioPlayerState>({
    isPlaying: false,
    isLoading: false,
    isMuted: false,
    volume: 0,
    setPlayerRef: () => {},
    setPlayButtonRef: () => {},
});

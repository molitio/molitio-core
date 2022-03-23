import React from 'react';
import { AudioPlayerState } from '../interfaces/AudioPlayerState';

export const AudioPlayerContext = React.createContext<AudioPlayerState>({
    isPlaying: false,
    isLoading: false,
    isMuted: false,
    volume: 0,
    setPlayerRef: () => {},
    setPlayButtonRef: () => {},
});

import React from 'react';
import { AudioPlayerState } from 'ui-context';

export const AudioPlayerContext = React.createContext<AudioPlayerState>({
    isPlaying: false,
    isLoading: false,
    volume: 0,
    setIsPlaying: () => {},
    setIsLoading: () => {},
    setVolume: () => {},
});

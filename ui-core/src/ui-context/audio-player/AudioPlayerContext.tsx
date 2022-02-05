import React from 'react';
import { AudioPlayerState } from 'ui-context/audio-player/interface/AudioPlayerState';

export const AudioPlayerContext = React.createContext<AudioPlayerState>({
    isPlaying: false,
    volume: 0,
    setIsPlaying: () => {},
});

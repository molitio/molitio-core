import React from 'react';
import { PlayerState } from 'media-player-context/interface/PlayerState';

export const PlayerContext = React.createContext<PlayerState>({ isPlaying: false, volume: 0, setIsPlaying: () => {} });

import React from 'react';
export interface PlayerState {
    isPlaying: boolean;
    volume: number;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setVolume?: React.Dispatch<React.SetStateAction<number>>;
}

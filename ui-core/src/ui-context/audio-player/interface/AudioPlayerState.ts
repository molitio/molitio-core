import React from 'react';

export interface AudioPlayerState {
    isPlaying: boolean;
    isLoading: boolean;
    volume: number;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setVolume?: React.Dispatch<React.SetStateAction<number>>;
}

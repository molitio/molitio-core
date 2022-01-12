import { AudioPreloadTags } from 'ui-core-models';
import { PlayerState } from '../../media-player-context/interface/PlayerState';

export interface AudioPlayerProps {
    src: string;
    /* preload: AudioPreloadTags;
    togleAutoPlay: () => void; */
    //playerState: PlayerState;
    /* togglePlayPause?: () => void;
    toggleLoop: () => void;
    toggleMute: () => void; */
}

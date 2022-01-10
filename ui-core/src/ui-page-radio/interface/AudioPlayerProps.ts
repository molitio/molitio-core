import { AudioPreloadTags } from 'ui-core-models';

export interface AudioPlayerProps {
    src: string;
    /* preload: AudioPreloadTags;
    togleAutoPlay: () => void; */
    togglePlayPause?: () => void;
    /*  toggleLoop: () => void;
    toggleMute: () => void; */
}

import { AudioPlayerContext } from 'ui-context';
import React, { useRef } from 'react';
import { AudioPlayerProps } from '../interfaces/AudioPlayerProps';

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ ...props }) => {
    const playerContext = React.useContext(AudioPlayerContext);
    const playerRef = useRef<HTMLAudioElement>(null);

    React.useEffect(() => {
        const effect = () => {
            playerContext.isPlaying ? playerRef.current?.play() : playerRef.current?.pause();
        };
        effect();
    }, [playerContext]);

    return <audio src={props.src} ref={playerRef}></audio>;
};

/* 
    src: string;
    preload: AudioPreloadTags;
    togleAutoPlay: () => void;
    togglePlayPause: () => void;
    toggleLoop: () => void;
    toggleMute: () => void;



 	Value 	Description
autoplay 	autoplay 	Specifies that the audio will start playing as soon as it is ready
controls 	controls 	Specifies that audio controls should be displayed (such as a play/pause button etc)
loop 	loop 	Specifies that the audio will start over again, every time it is finished
muted 	muted 	Specifies that the audio output should be muted
preload 	auto
metadata
none 	Specifies if and how the author thinks the audio should be loaded when the page loads
src 	URL 	Specifies the URL of the audio file
 */

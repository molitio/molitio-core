import React from 'react';
import { AudioPlayerProps } from '../interface/AudioPlayerProps';

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ ...props }) => {
    return <audio src={props.src} ></audio>;
};

/* 
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

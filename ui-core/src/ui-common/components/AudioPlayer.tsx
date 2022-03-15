import React from 'react';
import { AudioPlayerContext } from 'ui-context';
import { AudioPlayerProps } from '../interfaces/AudioPlayerProps';
import { createUseStyles } from 'react-jss';

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ ...props }) => {
    const playerContext = React.useContext(AudioPlayerContext);
    const playerRef = React.useRef<HTMLAudioElement>(null);

    const style = createUseStyles({
        visibilityHidden: {
            visibility: 'visible',
            pointerEvents: 'auto',
        },
    }).apply({});

    React.useEffect(() => {
        const effect = async () => {
            if (playerRef.current) {
                playerRef.current.onloadstart = () => {};
                playerRef.current.oncanplay = () => {
                    playerContext.setIsLoading(false);
                };
            }
        };
        effect();
    }, []);

    const playAudio = async () => {
        if (playerRef.current) {
            if (playerContext.isPlaying) {
                playerContext.setIsLoading(true);
                console.log(`isPlaying: ${playerContext.isPlaying}`);
                //playerRef.current.muted = false;
                playerContext.setVolume(1);
                playerRef.current.volume = playerContext.volume;
                console.log('starting play');
                await playerRef.current.play();
            } else if (!playerContext.isPlaying) {
                playerRef.current.muted = true;
                playerRef.current.pause();
                playerRef.current.load();
            }
        }
    };

    React.useEffect(() => {
        const effect = async () => {
            await playAudio();
            effect();
        };
    }, [playerContext.isPlaying]);

    return (
        <audio
            id="audio-player-main"
            controls
            ref={playerRef}
            tabIndex={0}
            preload={props.preload}
            className={style.visibilityHidden}
            // src={props.src}
        >
            <source src={props.src} type="audio/mpeg" />
            <a href={props.src}>{props.src}</a>
        </audio>
    );
};

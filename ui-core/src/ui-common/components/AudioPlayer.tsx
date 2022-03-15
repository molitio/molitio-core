import React from 'react';
import { AudioPlayerContext } from 'ui-context';
import { AudioPlayerProps } from '../interfaces/AudioPlayerProps';
import { createUseStyles } from 'react-jss';

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ ...props }) => {
    const playerContext = React.useContext(AudioPlayerContext);
    const playerRef = React.useRef<HTMLAudioElement>(null);

    const style = createUseStyles({
        visibilityHidden: {
            visibility: 'hidden',
        },
    }).apply({});

    React.useEffect(() => {
        const effect = async () => {
            if (playerRef.current) {
                playerRef.current.onloadstart = () => {
                    playerContext.setIsLoading(true);
                };
                playerRef.current.onloadeddata = () => {
                    playerContext.setIsLoading(false);
                };
            }
        };
        effect();
        console.log(`playerContext.isLoading: ${playerContext.isLoading}`);
        console.log(`playerContext.volume: ${playerContext.volume}`);
    }, []);

    React.useEffect(() => {
        playerContext.volume = 1;
        const effect = async () => {
            if (playerContext.isPlaying && playerRef.current) {
                playerRef.current.volume = playerContext.volume;
                await playerRef.current?.play();
            } else if (!playerContext.isPlaying && playerRef.current) {
                playerRef.current.volume = 0;
                playerRef.current?.pause();
            }
        };
        effect();
    }, [playerContext.isPlaying]);

    return (
        <audio
            id="audio-player-main"
            controls
            ref={playerRef}
            tabIndex={0}
            preload={props.preload}
            className={style.visibilityHidden}
        >
            <source src={props.src} type="audio/mpeg" />
            <a href={props.src}>ˇ</a>;
        </audio>
    );
};

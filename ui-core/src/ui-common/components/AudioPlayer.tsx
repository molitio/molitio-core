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

    // playerContext.playerRef = playerRef;
/*     React.useEffect(() => {
        const effect = async () => {
            if (playerRef.current) {
                playerContext.setPlayerRef(playerRef);
            }
        };
        effect();
    }, [playerRef.current]); */

    return (
        <audio
            id="audio-player-main"
            controls
            //ref={playerRef}
            preload={props.preload}
            className={style.visibilityHidden}
        >
            <source src={props.src} type="audio/mpeg" />
            <a href={props.src}>{props.src}</a>
        </audio>
    );
};

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
            pointerEvents: 'none',
            width: '100%',
        },
    }).apply({});

    React.useEffect(() => {
        const effect = async () => {
            if (playerRef.current) {
                playerContext.setPlayerRef(playerRef.current);
            }
        };
        effect();
    }, []);

    return (
        <audio
            id="audio-player-main"
            controls
            ref={playerRef}
            preload={props.preload}
            className={style.visibilityHidden}
            muted
        >
            <source src={props.mediaSource.sourceUrl} type={props.mediaSource.mediaType} />
            <a href={props.mediaSource.sourceUrl}>{props.mediaSource.sourceUrl}</a>

            {props.alternativeMediaSource ? (
                <source src={props.alternativeMediaSource.sourceUrl} type={props.alternativeMediaSource.mediaType} />
            ) : (
                ''
            )}
            {props.alternativeMediaSource ? (
                <a href={props.alternativeMediaSource.sourceUrl}>{props.alternativeMediaSource.sourceUrl}</a>
            ) : (
                ''
            )}
        </audio>
    );
};

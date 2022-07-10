import React from 'react';
import { AudioPlayerProps } from '../interfaces/AudioPlayerProps';
import { createUseStyles } from 'react-jss';
import { AudioPlayerContext } from 'ui-media';

export const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
    const { preload, mediaSource, alternativeMediaSource } = props;

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
            preload={preload}
            className={style.visibilityHidden}
            muted
        >
            <source src={mediaSource.sourceUrl} type={mediaSource.mediaType} />
            <a href={mediaSource.sourceUrl}>{mediaSource.sourceUrl}</a>

            {alternativeMediaSource ? (
                <source src={alternativeMediaSource.sourceUrl} type={alternativeMediaSource.mediaType} />
            ) : (
                ''
            )}
            {alternativeMediaSource ? (
                <a href={alternativeMediaSource.sourceUrl}>{alternativeMediaSource.sourceUrl}</a>
            ) : (
                ''
            )}
        </audio>
    );
};

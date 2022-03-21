import React from 'react';
import { AudioPlayerContext } from '../components/AudioPlayerContext';
import { DeviceContext } from '../../device/components/DeviceContext';
import { AudioPlayerState } from '../../audio-player/interfaces/AudioPlayerState';

export enum AudioPlayerStateActionType {
    IS_PLAYING = 'isPlaying',
    IS_LOADING = 'isLoading',
    IS_MUTED = 'isMuted',
    SET_PLAYER_REF = 'setPlayerRef',
}
interface AudioPlayerStateAction {
    type: AudioPlayerStateActionType;
    payload: AudioPlayerState;
}

export const AudioPlayerContextProvider: React.FC = ({ children }) => {
    const playerStateReducer = (state: AudioPlayerState, action: AudioPlayerStateAction): AudioPlayerState => {
        const { type: actionType, payload } = action;
        switch (actionType) {
            case AudioPlayerStateActionType.IS_LOADING:
                return {
                    ...state,
                    isLoading: payload.isLoading,
                };
            case AudioPlayerStateActionType.IS_PLAYING:
                if (state.playerRef?.current) {
                    console.log(`isPlaying & current`);
                    //state.playerRef.current.play();
                    return {
                        ...state,
                        isPlaying: payload.isPlaying,
                    };
                } else {
                    return state;
                }
            case AudioPlayerStateActionType.IS_MUTED:
                if (state.playerRef?.current) {
                    //  state.playerRef.current.muted = payload.isMuted;
                    return {
                        ...state,
                        isMuted: payload.isMuted,
                    };
                } else {
                    return state;
                }
            case AudioPlayerStateActionType.SET_PLAYER_REF:
                if (payload.playerRef?.current) {
                    /*     payload.playerRef.current.onloadstart = toggleLoading;
                    payload.playerRef.current.oncanplay = toggleLoading; */
                }
                return {
                    ...state,
                    //playerRef: payload.playerRef,
                };
            default:
                return state;
        }
    };

    const deviceContext = React.useContext(DeviceContext);
    //const [playerRef, setPlayerRef] = React.useState<React.RefObject<HTMLAudioElement> | undefined>(undefined);
    const [playButtonRef, setPlayButtonRef] = React.useState<HTMLElement | SVGElement | undefined>(undefined);

    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    //const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isMuted, setIsMuted] = React.useState<boolean>(false);
    const [volume, setVolume] = React.useState<number>(0);

    const setPlayerRef = (ref: React.RefObject<HTMLAudioElement> | undefined) => {
        dispatch({ type: AudioPlayerStateActionType.SET_PLAYER_REF, payload: { ...playerState, playerRef: ref } });
    };

    const toggleLoading = (ev: Event) => {
        ev.preventDefault();
        console.log(`context on load: ${playerState.isLoading}`);
        dispatch({
            type: AudioPlayerStateActionType.IS_LOADING,
            payload: { ...playerState, isLoading: !playerState.isLoading },
        });
    };

    const [{ ...playerState }, dispatch] = React.useReducer(playerStateReducer, {
        isPlaying: true,
        isMuted: true,
        isLoading: false,
        setIsLoading: toggleLoading,
        setPlayerRef: setPlayerRef,
    });

    /*  isPlaying,
                  isLoading: true,
        isMuted: true,
        volume: 0,
        setPlayerRef: setPlayerRef,
        setPlayButtonRef: setPlayButtonRef,
        setIsPlaying: setIsPlaying,
        setVolume: setVolume,
        setIsMuted: setIsMuted,
        setIsLoading: setIsLoading, */

    /*  React.useEffect(() => {
        const effect = async () => {
            console.log('player state changed');
        };
        effect();
    }, [playerState.isMuted]); */

  /*   React.useEffect(() => {
        const effect = async () => {
            console.log(`dispatch: ${AudioPlayerStateActionType.IS_PLAYING}`);
            dispatch({
                type: AudioPlayerStateActionType.IS_PLAYING,
                payload: { ...playerState, isPlaying: isPlaying },
            });
        };
        effect();
    }, [isPlaying]); */

    /*  React.useEffect(() => {
        const effect = () => {
            // setPlayerState({ ...playerState, isLoading: isLoading });
        };
        effect();
    }, [isLoading]);
 */
 /*    React.useEffect(() => {
        const effect = () => {
            console.log(`context isMuted: ${isMuted}`);

            dispatch({
                type: AudioPlayerStateActionType.IS_MUTED,
                payload: { ...playerState, isMuted: isMuted },
            });
        };

        effect();
    }, [isMuted]); */

    /*     React.useEffect(() => {
        const effect = () => {
            if (playerRef) {
                playerRef.volume = volume.valueOf();
                //setPlayerRef(playerRef);
                //setPlayerState({ ...playerState, volume: volume });
            } else {
                console.log('volume: no playerRef');
            }
        };
        effect();
    }, [volume]);
 */

    // playerState.setIsLoading(!isLoading);

    /*    React.useEffect(() => {
        const effect = async () => {
                  if (playerRef) {
                // console.log('context starting play');
                //  setPlayerState({ ...playerState, playerRef: playerRef });
            } else {
                console.log('playerRef: no playerRef');
            } 
        };

        effect();
    }, []);
 */
    const onStartEvent = (e: TouchEvent | MouseEvent) => {
        e.preventDefault();
        //console.log(`onStartEvent: ${isMuted}`);
        // playerState.setIsMuted(!isMuted);
    };

    /* React.useEffect(() => {
        const effect = async () => {
            if (playButtonRef) {
                switch (deviceContext.device) {
                    case 'ios':
                    case 'android':
                        console.log('listen only on touchstart');
                        playButtonRef.onclick = () => {};
                        playButtonRef.ontouchstart = onStartEvent;
                        break;
                    default:
                        console.log('listen only on onclick');
                        playButtonRef.ontouchstart = () => {};
                        playButtonRef.onclick = onStartEvent;
                        break;
                }
                //setPlayButtonRef(playButtonRef);
                //setPlayerState({ ...playerState, playButtonRef: playButtonRef });
                //setPlayerState({ ...playerState });
            } else {
                console.log('playButtonRef: no playButtonRef');
            }
        };

        effect();
    }, []); */

    return <AudioPlayerContext.Provider value={playerState}>{children}</AudioPlayerContext.Provider>;
};

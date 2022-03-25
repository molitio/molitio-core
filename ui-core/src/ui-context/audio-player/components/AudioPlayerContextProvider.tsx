import React from 'react';
import { AudioPlayerContext } from '../components/AudioPlayerContext';
import { DeviceContext } from '../../device/components/DeviceContext';
import { AudioPlayerState } from '../../audio-player/interfaces/AudioPlayerState';

export enum AudioPlayerStateActionType {
    TOGGLE_PLAYING = 'togglePlaying',
    TOGGLE_LOADING = 'toggleLoading',
    TOGGLE_MUTED = 'toggleMuted',
    SET_PLAYER_REF = 'setPlayerRef',
    SET_PLAY_BUTTON_REF = 'setPlayButtonRef',
    START_PLAYING = 'startPlaying',
    STOP_PLAYING = 'stopPlaying',
}
interface AudioPlayerStateAction {
    type: AudioPlayerStateActionType;
    payload: AudioPlayerState;
}

export const AudioPlayerContextProvider: React.FC = ({ children }) => {
    const deviceContext = React.useContext(DeviceContext);
    const playerStateReducer = (state: AudioPlayerState, action: AudioPlayerStateAction): AudioPlayerState => {
        const { type: actionType, payload } = action;
        switch (actionType) {
            case AudioPlayerStateActionType.TOGGLE_LOADING:
                console.log(`toggle loading state isLoading: ${payload.isLoading}`);
                return {
                    ...state,
                    isLoading: payload.isLoading,
                };
            case AudioPlayerStateActionType.TOGGLE_PLAYING:
                if (!state.playerRef) {
                    return state;
                }
                console.log(`payload isMuted: ${payload.isMuted} isPlaying: ${payload.isPlaying}`);

                console.log(`state  isMuted: ${state.isMuted} isPlaying: ${state.isPlaying}`);
                const updatedState = {
                    ...state,
                    isMuted: state.isPlaying,
                    isPlaying: !state.isPlaying,
                };

                if (updatedState.playerRef) {
                    updatedState.playerRef.muted = updatedState.isMuted;
                    if (!state.isPlaying) {
                        console.log('___playing');
                        updatedState.playerRef.play();
                    } else {
                        console.log('___stopping');
                        updatedState.playerRef.pause();
                        updatedState.playerRef.load();
                    }
                }

                console.log(
                    `updatedState  isMuted: ${updatedState.isMuted} isPlaying: ${updatedState.isPlaying}, playerRef.muted: ${updatedState?.playerRef?.muted}`,
                );

                return updatedState;
            case AudioPlayerStateActionType.SET_PLAYER_REF:
                if (!payload.playerRef) {
                    return state;
                }
                payload.playerRef.onloadstart = loadStarted;
                payload.playerRef.oncanplay = loadedContent;
                payload.isMuted = payload.playerRef.muted;
                return {
                    ...state,
                    playerRef: payload.playerRef,
                    isMuted: payload.playerRef.muted,
                };
            case AudioPlayerStateActionType.SET_PLAY_BUTTON_REF:
                if (!payload.playButtonRef) {
                    return state;
                }
                switch (deviceContext.device) {
                    case 'ios':
                    case 'android':
                        payload.playButtonRef.ontouchstart = onTogglePlayEvent;
                        break;
                    default:
                        payload.playButtonRef.onclick = onTogglePlayEvent;
                        break;
                }
                return {
                    ...state,
                    playButtonRef: payload.playButtonRef,
                };
            /*   case AudioPlayerStateActionType.START_PLAYING:
                if (!state.playerRef) {
                    return state;
                }
                state.playerRef.play();
                return state;
            case AudioPlayerStateActionType.STOP_PLAYING:
                if (!state.playerRef) {
                    return state;
                }
                state.playerRef.pause();
                state.playerRef.load();
                return state;
                 */
            default:
                return state;
        }
    };

    const setPlayerRef = (ref: HTMLAudioElement | null) => {
        dispatch({ type: AudioPlayerStateActionType.SET_PLAYER_REF, payload: { ...playerState, playerRef: ref } });
    };

    const setPlayButtonRef = (ref: HTMLElement | SVGElement | SVGGElement | null) => {
        dispatch({
            type: AudioPlayerStateActionType.SET_PLAY_BUTTON_REF,
            payload: { ...playerState, playButtonRef: ref },
        });
    };

    const loadStarted = () => {
        dispatch({
            type: AudioPlayerStateActionType.TOGGLE_LOADING,
            payload: { ...playerState, isLoading: true },
        });
    };

    const loadedContent = () => {
        dispatch({
            type: AudioPlayerStateActionType.TOGGLE_LOADING,
            payload: { ...playerState, isLoading: false },
        });
    };

    const onTogglePlayEvent = (ev: TouchEvent | MouseEvent) => {
        ev.preventDefault();
        console.log(`onTogglePlayEvent: playerState.isPlaying: ${playerState.isPlaying}`);
        if (!playerState.playerRef) {
            return;
        }

        if (!playerState.isPlaying) {
            dispatch({
                type: AudioPlayerStateActionType.TOGGLE_PLAYING,
                payload: { ...playerState },
            });
            //   dispatch({ type: AudioPlayerStateActionType.START_PLAYING, payload: { ...playerState } });
        } else {
            dispatch({
                type: AudioPlayerStateActionType.TOGGLE_PLAYING,
                payload: { ...playerState },
            });
            //  dispatch({ type: AudioPlayerStateActionType.STOP_PLAYING, payload: { ...playerState } });
        }
    };

    const [playerState, dispatch] = React.useReducer(playerStateReducer, {
        isPlaying: false,
        isMuted: true,
        isLoading: false,
        setPlayerRef: setPlayerRef,
        setPlayButtonRef: setPlayButtonRef,
    });

    return <AudioPlayerContext.Provider value={playerState}>{children}</AudioPlayerContext.Provider>;
};

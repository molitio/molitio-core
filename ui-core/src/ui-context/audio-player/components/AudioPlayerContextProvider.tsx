import React from 'react';
import { AudioPlayerContext } from '../components/AudioPlayerContext';
import { DeviceContext } from '../../device/components/DeviceContext';
import { AudioPlayerState } from '../../audio-player/interfaces/AudioPlayerState';
import { WithChildren } from 'ui-core-models';

export enum AudioPlayerStateActionType {
    TOGGLE_PLAYING = 'togglePlaying',
    TOGGLE_LOADING = 'toggleLoading',
    TOGGLE_MUTED = 'toggleMuted',
    SET_PLAYER_REF = 'setPlayerRef',
    SET_PLAY_BUTTON_REF = 'setPlayButtonRef',
}
interface AudioPlayerStateAction {
    type: AudioPlayerStateActionType;
    payload: AudioPlayerState;
}

export const AudioPlayerContextProvider: React.FC<WithChildren> = ({ children }) => {
    const deviceContext = React.useContext(DeviceContext);
    const playerStateReducer = (state: AudioPlayerState, action: AudioPlayerStateAction): AudioPlayerState => {
        const { type: actionType, payload } = action;
        switch (actionType) {
            case AudioPlayerStateActionType.TOGGLE_LOADING:
                return {
                    ...state,
                    isLoading: !state.isLoading,
                };
            case AudioPlayerStateActionType.TOGGLE_PLAYING:
                if (!state.playerRef) {
                    return state;
                }

                const updatedState = {
                    ...state,
                    isMuted: state.isPlaying,
                    isPlaying: !state.isPlaying,
                };

                if (updatedState.playerRef) {
                    updatedState.playerRef.muted = updatedState.isMuted;
                    if (!state.isPlaying) {
                        updatedState.playerRef.play();
                    } else {
                        updatedState.playerRef.pause();
                        //updatedState.playerRef.load();
                    }
                }
                return updatedState;
            case AudioPlayerStateActionType.SET_PLAYER_REF:
                if (!payload.playerRef) {
                    return state;
                }
                payload.playerRef.onloadstart = loadStarted;
                if (deviceContext.device === 'ios') {
                    payload.playerRef.onloadedmetadata = loadedContent;
                } else {
                    payload.playerRef.oncanplay = loadedContent;
                }
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
            payload: { ...playerState },
        });
    };

    const loadedContent = () => {
        dispatch({
            type: AudioPlayerStateActionType.TOGGLE_LOADING,
            payload: { ...playerState },
        });
    };

    const onTogglePlayEvent = (ev: TouchEvent | MouseEvent) => {
        ev.preventDefault();
        if (!playerState.playerRef) {
            return;
        }

        if (!playerState.isPlaying) {
            dispatch({
                type: AudioPlayerStateActionType.TOGGLE_PLAYING,
                payload: { ...playerState },
            });
        } else {
            dispatch({
                type: AudioPlayerStateActionType.TOGGLE_PLAYING,
                payload: { ...playerState },
            });
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

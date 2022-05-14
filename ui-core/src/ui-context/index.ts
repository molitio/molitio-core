/*
audio-player
*/

export { AudioPlayerContext } from './audio-player/components/AudioPlayerContext';
export { AudioPlayerContextProvider } from './audio-player/components/AudioPlayerContextProvider';
export type { AudioPlayerState } from './audio-player/interfaces/AudioPlayerState';
/*
theming
*/

export { StyledThemeContextProvider } from './styled-theme/components/StyledThemeContextProvider';
export type { StyledThemeContextProviderProps } from './styled-theme/interface/StyledThemeContextProviderProps';
export type { StyledThemeContext } from './styled-theme/interface/StyledThemeContext';
export type { StyledThemeProps } from './styled-theme/interface/ThemeProps';

/*
device
*/
export { DeviceContext } from './device/components/DeviceContext';
export { DeviceContextProvider } from './device/components/DeviceContextProvider';

/*
styling
*/

export { YellowHighlight, OrangeHighlight } from './styled-theme/styles/SvgBorderHighLights';
export { DevHighlight } from './styled-theme/styles/Borders';
//import styles from './styled-theme/styles/styles.module.css';
//export { styles };

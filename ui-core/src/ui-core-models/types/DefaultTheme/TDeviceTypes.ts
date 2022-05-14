import { DefaultTheme } from 'react-jss';

export type TDeviceTypes = DefaultTheme & {
    device: 'web' | 'ios' | 'android';
};

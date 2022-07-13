import React from 'react';
import { DeviceTypes } from '@molitio/molitio-schema';

export const DeviceContext = React.createContext<DeviceTypes>({
    device: 'web',
});

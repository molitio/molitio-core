import React from 'react';
import { DeviceTypes } from '@molitio/system-schema';

export const DeviceContext = React.createContext<DeviceTypes>({
    device: 'web',
});

import React from 'react';
import { TDeviceTypes } from 'ui-core-schema';

export const DeviceContext = React.createContext<TDeviceTypes>({
    device: 'web',
});

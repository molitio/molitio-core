import React from 'react';
import { TDeviceTypes } from 'ui-core-models';

export const DeviceContext = React.createContext<TDeviceTypes>({
    device: 'web',
});

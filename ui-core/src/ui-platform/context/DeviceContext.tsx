import React from 'react';
import { DeviceTypes } from 'ui-core-schema';

export const DeviceContext = React.createContext<DeviceTypes>({
    device: 'web',
});

import React from 'react';
import { TDeviceTypes } from 'ui-core-models';
import DeviceDetector from 'device-detector-js';
import { DeviceContext } from './DeviceContext';

export const DeviceContextProvider: React.FC = ({ children }) => {
    const [device, setDevice] = React.useState<TDeviceTypes>({
        device: 'web',
    });

/*     React.useEffect(() => {
        const effect = async () => {
            const deviceDetector = new DeviceDetector();
            const userAgent = window.navigator.userAgent;
            console.log(`userAgent: ${userAgent}`);
            const detectedDevice = deviceDetector.parse(userAgent);

            //'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36';
            switch (detectedDevice.os?.name) {
                case 'iOS':
                    setDevice({ device: 'ios' });
                    console.log('yayy, i am an ios');
                    break;
                case 'Android':
                    setDevice({ device: 'android' });
                    console.log('yayy, i am an android');
                    break;
                default:
                    setDevice({ device: 'web' });
                    console.log('web for else');
                    break;
            }

            console.log(`device: ${JSON.stringify(detectedDevice)}`);
        };
        effect();
    }, []); */

    return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
};

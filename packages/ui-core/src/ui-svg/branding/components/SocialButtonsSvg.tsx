import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../../common/interface/SvgComponentProps';
import { SocialButtonsSvgProps } from '../interfaces/SocialButtonsSvgProps';

export const SocialButtonsSvg: React.FC<SvgComponentProps & SocialButtonsSvgProps> = (props) => {
    const { dimensions, facebookUrl, instagramUrl, youtubeUrl, externalUrl } = props;

    const style = createUseStyles({
        svg: {
            height: dimensions === 'FULLSCREEN' ? '100%' : dimensions?.height,
            width: dimensions === 'FULLSCREEN' ? '100%' : dimensions?.width,
            pointerEvents: 'none',
        },
        externalSite: {
            pointerEvents: 'auto',
            cursor: 'pointer',
        },
        fil0: { fill: 'white' },
        fil1: { fill: '#2A2A2A' },
        displayed: {
            display: 'visible',
        },
        hidden: {
            display: 'none',
        },
    }).apply({});

    return (
        <svg
            id="logo-socialbuttons"
            className={style.svg}
            clipRule="evenodd"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            version="1.1"
            viewBox="0 0 400 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="logo-socialbuttons" strokeWidth="2.8779">
                {facebookUrl ? (
                    <g id="logo-socialbuttons-facebook" className={style.externalSite}>
                        <a href={facebookUrl} target="_blank">
                            <path
                                className={style.fil0}
                                d="m91.298 48.479c0 23.841-19.327 43.168-43.168 43.168-23.84 0-43.167-19.326-43.167-43.167v-0.0011c0-23.841 19.327-43.168 43.168-43.168 23.84 0 43.167 19.327 43.167 43.167z"
                            />
                            <path
                                className={style.fil1}
                                d="m58.35 48.494h-6.6833v23.836h-9.9089v-23.836h-4.7117v-8.4207h4.7117v-5.4481c0-3.8964 1.8508-9.9984 9.9964-9.9984l7.3395 0.03137v8.1729h-5.3247c-0.87459 0-2.1023 0.43687-2.1023 2.2951v4.9554h7.5484z"
                            />
                        </a>
                    </g>
                ) : (
                    ''
                )}
                {instagramUrl ? (
                    <g id="logo-socialbuttons-instagram" className={style.externalSite}>
                        <a href={instagramUrl} target="_blank">
                            <path
                                className={style.fil0}
                                d="m192.03 48.479c0 23.842-19.327 43.169-43.169 43.169-23.84 0-43.167-19.326-43.167-43.167v-0.0011c0-23.841 19.327-43.168 43.167-43.168h1e-3c23.84 0 43.167 19.327 43.167 43.167z"
                            />
                            <path
                                className={style.fil1}
                                d="m160.09 22.014h-22.467c-8.398 0-15.23 6.8327-15.23 15.23v22.467c0 8.3983 6.8321 15.23 15.23 15.23h22.467c8.398 0 15.231-6.8321 15.231-15.23v-22.467c0-8.3977-6.8327-15.23-15.231-15.23zm9.988 15.23v22.467c0 5.5074-4.4806 9.988-9.988 9.988h-22.467c-5.5074 0-9.988-4.4806-9.988-9.988v-22.467c0-5.5074 4.4806-9.9877 9.988-9.9877h22.467c5.5074 0 9.988 4.4803 9.988 9.9877zm-21.221-2.5066c-7.5766 0-13.741 6.1636-13.741 13.74 0 7.5766 6.1642 13.741 13.741 13.741 7.5763 0 13.74-6.1641 13.74-13.741 0-7.5766-6.1636-13.74-13.74-13.74zm8.4973 13.74c0 4.6855-3.8118 8.4975-8.4973 8.4975-4.6858 0-8.4981-3.8121-8.4981-8.4975 0-4.6855 3.8123-8.4981 8.4981-8.4981 4.6855 0 8.4973 3.8126 8.4973 8.4981zm5.4294-17.715c-1.9826 0-3.5962 1.6134-3.5962 3.5968 0 1.982 1.6136 3.5948 3.5962 3.5948s3.5954-1.6128 3.5954-3.5948c0-1.9834-1.6128-3.5968-3.5954-3.5968z"
                            />
                        </a>
                    </g>
                ) : (
                    ''
                )}
                {youtubeUrl ? (
                    <g id="logo-socialbuttons-youtube" className={style.externalSite}>
                        <a href={youtubeUrl} target="_blank">
                            <path
                                className={style.fil0}
                                d="m292.75 48.479c0 23.841-19.327 43.168-43.168 43.168h-8.6e-4c-23.84 0-43.166-19.326-43.166-43.167v-0.0011c0-23.841 19.326-43.168 43.168-43.168h5.8e-4c23.84 0 43.167 19.327 43.167 43.167z"
                            />
                            <path
                                className={style.fil1}
                                d="m273.18 39.362c0-3.8975-3.1568-7.0563-7.0537-7.0563h-33.084c-3.8975 0-7.0543 3.1588-7.0543 7.0563v18.92c0 3.8969 3.1568 7.0563 7.0543 7.0563h33.084c3.897 0 7.0537-3.1593 7.0537-7.0563zm-28.315 17.443v-17.77l13.478 8.8835z"
                            />
                        </a>
                    </g>
                ) : (
                    ''
                )}
                {externalUrl ? (
                    <g id="logo-socialbuttons-external" className={style.externalSite}>
                        <a href={externalUrl} target="_blank">
                            <path
                                className={style.fil0}
                                d="m393.48 48.479c0 23.841-19.327 43.168-43.168 43.168h-8.7e-4c-23.84 0-43.166-19.326-43.166-43.167v-0.0011c0-23.841 19.326-43.168 43.168-43.168h5.8e-4c23.84 0 43.167 19.327 43.167 43.167z"
                            />
                            <path
                                className={style.fil1}
                                d="m334.86 24.012c4.2046 0.18879 8.2106 1.3267 12.184 2.5889 4.3773 1.3906 8.5358 3.2609 12.386 5.7909 5.35 3.5156 8.9494 8.4345 11.467 14.227 2.2007 5.0645 3.5922 10.352 4.2501 15.827 0.14763 1.2283 0.10392 2.4856 0.0711 3.7274-0.0259 0.99776-0.52695 1.7817-1.3903 2.2991-1.2122 0.72637-2.5118 1.184-3.9438 1.1641-1.2775-0.01728-1.8252-0.57012-1.8801-1.8278-0.36002-8.2069-2.7216-15.728-7.7746-22.287-4.0734-5.2875-9.426-8.8556-15.581-11.281-4.236-1.6692-8.6107-2.7616-13.177-2.9996-0.6173-0.03222-1.0081-0.39283-1.2504-0.93676-0.62191-1.3946-0.0878-4.4832 1.0611-5.4671 0.47831-0.4101 1.1589-0.65213 1.7878-0.79775 0.56838-0.13152 1.1912-0.02881 1.7898-0.02881z"
                            />
                            <path
                                className={style.fil1}
                                d="m332.42 38.997c6.8013 0.97734 13.241 2.879 18.747 7.1921 2.6413 2.0689 4.4935 4.7692 5.8919 7.7833 1.963 4.2316 3.2175 8.6587 3.4612 13.338 0.11828 2.2732-0.50823 3.0638-2.7331 3.5643-0.3462 0.078-0.71342 0.10792-1.0683 0.09358-0.90337-0.03681-1.224-0.396-1.2608-1.2988-0.17527-4.301-1.1989-8.381-3.2376-12.184-3.2204-6.0076-8.3252-9.7054-14.661-11.86-2.4344-0.82769-4.9295-1.403-7.5113-1.5172-0.68983-0.03052-1.0585-0.41183-1.1742-1.0455-0.20174-1.1037 0.0173-2.1498 0.56782-3.115 0.37815-0.6648 1.0277-0.90683 1.7569-0.94597 0.40579-0.02305 0.81387-0.0032 1.2208-0.0032z"
                            />
                        </a>
                    </g>
                ) : (
                    ''
                )}
            </g>
        </svg>
    );
};

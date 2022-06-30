import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { StyledThemeContext } from 'ui-context';
import { EmbededHtml } from './EmbededHtml';
import { WithChildren } from 'ui-core-schema';

export const CircleGradientHighlightSvg: React.FC<SvgComponentProps & WithChildren> = ( props ) => {

    const {dimensions, children} = props;

    const style = createUseStyles((themeContext: StyledThemeContext) => ({
        svg: {
            position: dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: dimensions === 'FULLSCREEN' ? '100vh' : dimensions?.height,
            width: dimensions === 'FULLSCREEN' ? '100vw' : dimensions?.width,
            pointerEvents: 'none',
        },
        gradientRect: {
            paintOrder: 'markers fill stroke',
        },
        content: {},
        gradientColors: {
            fill: themeContext.theme?.backgroundColor,
        },
        secondaryGradientColors: {
            fill: themeContext.theme?.secondaryBackgroundColor,
        },
    })).apply({});

    return (
        <svg
            id="highlight-circle-gradient"
            className={style.svg}
            preserveAspectRatio="xMidYMid slice"
            width="800pt"
            height="800pt"
            version="1.1"
            viewBox="0 0 800 800"
            /*  viewBox="0 0 600 800" */
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/2000/xlink"
        >
            <defs id="gradient-defs">
                <radialGradient id="gradient-fill" cx="400" cy="400" r="420" gradientUnits="userSpaceOnUse">
                    <stop id="gradient-stop-0" stopColor="black" stop-opacity=".0" offset="0" />
                    {/*  <stop id="gradient-stop-1" stopColor="cyan" stop-opacity=".9" offset="42%" /> */}
                    <stop id="gradient-stop-2" stopColor="black" stop-opacity=".9" offset="100%" />
                </radialGradient>
            </defs>
            <g id="rect-0">
                <rect
                    id="playg"
                    className={style.gradientRect}
                    x="0"
                    y="0"
                    width="800"
                    height="800"
                    fill="url(#gradient-fill)"
                    opacity=".5"
                />
            </g>
            <g>
                <EmbededHtml x="200" y="200" width="400" height="400">
                    {children}
                </EmbededHtml>
            </g>
        </svg>
    );
};

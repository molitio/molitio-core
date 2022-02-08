import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { StyledThemeContext } from 'ui-context';
import { SvgEmbeddedHtml } from './SvgEmbeddedHtml';

export const CircleGradientHighlightSvg: React.FC<SvgComponentProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        svg: {
            position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions?.height,
            width: props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions?.width,
            pointerEvents: 'none',
        },
        gradientRect: {
            paintOrder: 'markers fill stroke',
        },
        content: {},
        gradientColors: {
            fill: theme.backgroundColor,
        },
        secondaryGradientColors: {
            fill: theme.secondaryBackgroundColor,
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
            xmlnsXlink="http://www.w3.org/1999/xlink"
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
            <foreignObject x="200" y="200" width="400" height="400">
                <SvgEmbeddedHtml xmlns="http://www.w3.org/1999/xhtml">{props.children}</SvgEmbeddedHtml>
            </foreignObject>
        </svg>
    );
};

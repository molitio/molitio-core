import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-context';
import { StripesSvgProps } from '../interface/StripesSvgProps';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { EmbededImage } from './EmbededImage';

export const StripesSvg: React.FC<SvgComponentProps & StripesSvgProps> = () => {
    const rotationAngle = props.rotationAngle ?? 45;
    const fillOpacity = props.fillOpacity ?? 0.87059;
    const stripeLength = props.stripeLength ?? 1578.7;
    const stripeHeight = props.stripeHeight ?? 74.453;
    const componentWidth = props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions?.width;
    const componentHeight = props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions?.height;

    const style = createUseStyles((theme: StyledThemeContext) => ({
        svg: {
            position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            top: 0,
            left: 0,
            height: componentHeight,
            width: componentWidth,
            pointerEvents: 'auto',
        },
        stripes: {
            '& rect': {
                fill: theme.secondaryBackgroundColor,
            },
            '& rect:hover': props.highlightStripes
                ? {
                      ...theme.interactiveHighlight,
                  }
                : '',
        },
        stripesBackground: {
            '& rect': {
                fill: theme.backgroundColor,
            },
        },
    })).apply({});

    return (
        <svg
            className={style.svg}
            preserveAspectRatio="xMidYMid slice"
            id="stripe-background_a"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="clipToViewBox">
                <rect x="0" y="0" width="1920" height="1080" />
            </clipPath>
            <g clipPath="url(#clipToViewBox)" width="1920" height="1080">
                <g className={style.stripesBackground}>
                    <rect
                        x="-7.1054e-15"
                        width="100%"
                        height="100%"
                        fill="#363636"
                        fillRule="evenodd"
                        strokeWidth="14.547"
                    />
                </g>
                <g
                    id="stripes"
                    className={style.stripes}
                    fill="#2b2b2b"
                    fillOpacity={fillOpacity}
                    fillRule="evenodd"
                    strokeWidth=".6404"
                >
                    <rect
                        id="stripe-background_c"
                        transform={`rotate(${rotationAngle})`}
                        x="-733.07"
                        y="635.7"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_d"
                        transform={`rotate(${rotationAngle})`}
                        x="-572.12"
                        y="474.75"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_e"
                        transform={`rotate(${rotationAngle})`}
                        x="-411.16"
                        y="313.79"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_f"
                        transform={`rotate(${rotationAngle})`}
                        x="-250.21"
                        y="152.84"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_g"
                        transform={`rotate(${rotationAngle})`}
                        x="-89.251"
                        y="-8.1171"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_h"
                        transform={`rotate(${rotationAngle})`}
                        x="232.66"
                        y="-330.03"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_i"
                        transform={`rotate(${rotationAngle})`}
                        x="71.704"
                        y="-169.07"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_j"
                        transform={`rotate(${rotationAngle})`}
                        x="393.61"
                        y="-490.98"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_k"
                        transform={`rotate(${rotationAngle})`}
                        x="715.52"
                        y="-812.89"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_l"
                        transform={`rotate(${rotationAngle})`}
                        x="554.57"
                        y="-651.94"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_m"
                        transform={`rotate(${rotationAngle})`}
                        x="876.48"
                        y="-973.85"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_n"
                        transform={`rotate(${rotationAngle})`}
                        x="1037.4"
                        y="-1134.8"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_o"
                        transform={`rotate(${rotationAngle})`}
                        x="1198.4"
                        y="-1295.8"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                    <rect
                        id="stripe-background_p"
                        transform={`rotate(${rotationAngle})`}
                        x="1359.3"
                        y="-1456.7"
                        width={`${stripeLength}`}
                        height={`${stripeHeight}`}
                    />
                </g>
                <g width="1920" height="1080">
                    {props.embededImageSrc ? (
                        <EmbededImage
                            embededImageSrc={props.embededImageSrc}
                            dimensions={{ width: '1920', height: '1080' }}
                        />
                    ) : (
                        ''
                    )}
                </g>
            </g>
        </svg>
    );
};

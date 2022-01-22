import React from 'react';
import { createUseStyles } from 'react-jss';
import { ComponentGroupProps } from 'ui-common/interface/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-models';

export const ComponentGroup: React.FC<ComponentGroupProps> = ({ ...props }) => {
    const [position, setPositioning] = React.useState({});

    React.useEffect(() => {
        const positioning = () => {
            switch (props.groupingType) {
                case ComponentGroupTags.GRID:
                    return {
                        display: 'grid',
                    };
                    break;
                case ComponentGroupTags.VERTICAL_FLEX:
                    return {
                        display: 'flex',
                        flexDirection: 'column',
                    };
                    break;
                case ComponentGroupTags.HORIZONTAL_FLEX:
                    return {
                        display: 'flex',
                        flexDirection: 'row',
                    };
                    break;

                default:
                    return {};
                    break;
            }
        };
        setPositioning(positioning());
    }, [props.groupingType]);

    const style = createUseStyles({
        position: { ...position, width: '30vw', height: '30vh' },
    }).apply({});
    return <div className={style.position}>{props.children}</div>;
};

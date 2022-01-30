import React from 'react';
import { createUseStyles } from 'react-jss';
import { MultiColumnPageProps } from 'ui-page-landing/interfaces/MultiColumnPageProps';

export const MultiColumnPage: React.FC<MultiColumnPageProps> = ({ ...props }) => {
    const style = createUseStyles({}).apply({});

    return (
        <div>
            {props.pageSections.map(
                (section) => section.element,
                /*         <div>
                    <a href={section.anchor} />
                </div>; */
            )}
        </div>
    );
};

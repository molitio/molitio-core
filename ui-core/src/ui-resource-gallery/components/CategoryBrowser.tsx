import React from 'react';
import { TCategory, TImageResource } from 'ui-core-models';
import { CategoryBrowserProps } from '../interfaces/CategoryBrowserProps';
import styles from '../styles/CategoryBrowser.module.scss';

export const CategoryBrowser: React.FC<CategoryBrowserProps> = ({ ...props }) => (
    <>
        {Array.from([...(props.categories ?? new Map<string, TCategory>())]).map((category) => (
            <div key={category[0]}>
                <h2>{category[1].categoryName}</h2>

                {Array.from([...(category[1].resources ?? new Map<string, TImageResource>())]).map((resource) => (
                    <div className={styles.resourceContainer} key={resource[0]}>
                        <h2>{resource[1].imageTag}</h2>
                        <br />

                        <img className={styles.imagePosition} src={resource[1].imageUrl} alt={resource[0]} />
                        <br />
                    </div>
                ))}

                <br />
            </div>
        ))}
    </>
);

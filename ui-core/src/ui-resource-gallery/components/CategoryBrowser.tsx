import React from 'react';
import { TCategory, TImageResource } from 'ui-core-schema';
import { CategoryBrowserProps } from '../interfaces/CategoryBrowserProps';
import styles from '../styles/CategoryBrowser.module.scss';
import { ResourceGalleryActionType, ResourceGalleryReducer } from './ResourceGalleryReducer';

export const CategoryBrowser: React.FC<CategoryBrowserProps> = ({ ...props }) => {
    const [resourceGalleryState, dispatch] = React.useReducer(ResourceGalleryReducer, {});
    return (
        <section>
            {Array.from([...(props.categories ?? new Map<string, TCategory>())]).map((category) => (
                <div
                    key={category[0]}
                    onClick={() =>
                        dispatch({
                            type: ResourceGalleryActionType.SELECT_CATEGORY,
                            payload: { ...resourceGalleryState, selectedCategoryTag: category[0] },
                        })
                    }
                >
                    <h2>{category[1].categoryName}</h2>

                    {Array.from([...(category[1].resources ?? new Map<string, TImageResource>())]).map((resource) => (
                        <div className={styles.resourceContainer} key={resource[0]}>
                            <h2>{resource[1].imageTag}</h2>
                            <br />
                            <a href={resource[1].resourceId}>
                                <img className={styles.imagePosition} src={resource[1].imageUrl} alt={resource[0]} />
                            </a>
                            <br />
                        </div>
                    ))}

                    <br />
                </div>
            ))}
        </section>
    );
};

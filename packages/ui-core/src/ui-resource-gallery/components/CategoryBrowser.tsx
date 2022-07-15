import React from 'react';
import { Category, ImageResource } from '@molitio/system-schema';
import { CategoryBrowserProps } from '../interfaces/CategoryBrowserProps';
import { createUseStyles } from 'react-jss';
import { ResourceGalleryActionType, ResourceGalleryReducer } from './ResourceGalleryReducer';

export const CategoryBrowser: React.FC<CategoryBrowserProps> = (props) => {
    const { categories } = props;

    const styles = createUseStyles({
        imagePosition: {
            width: '5em',
            height: 'auto',
        },
        resourceContainer: {
            display: 'flex',
        },
    }).apply({});

    const [resourceGalleryState, dispatch] = React.useReducer(ResourceGalleryReducer, {});
    return (
        <section>
            {Array.from([...(categories ?? new Map<string, Category>())]).map((category) => (
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

                    {Array.from([...(category[1].resources ?? new Map<string, ImageResource>())]).map((resource) => (
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

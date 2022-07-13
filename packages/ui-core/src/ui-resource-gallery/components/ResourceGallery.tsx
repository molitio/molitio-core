import React from 'react';
import { ComponentTag, SystemStyleTag, ThemeNameTags } from '@molitio/molitio-schema';
import { createUseStyles } from 'react-jss';
import { MolitioComponent } from 'ui-common';
import { resolveSystemStyle, useSystemStyles } from 'ui-style-service';
import { ResourceGalleryProps } from '../interfaces/ResourceGalleryProps';
import { CategoryBrowser } from './CategoryBrowser';
import { ResourceGalleryActionType, ResourceGalleryReducer } from './ResourceGalleryReducer';

export const ResourceGallery: MolitioComponent<ResourceGalleryProps> = (props) => {
    const { gallery } = props;

    const styles = createUseStyles({
        resourceGallerySection: {
            color: '#fff',
            minWidth: '100vw',
            minHeight: '100vh',
            display: 'flex',
            overflow: 'auto',
            pointerEvents: 'auto',
        },
        resourceGalleryContainer: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
        },
        categoryBrowser: {
            top: '25%',
            position: 'fixed',
            width: '12em',
            height: '50vh',
            overflowX: 'scroll',
        },
        resourcePreview: {
            flex: 1,
        },
        title: {
            textAlign: 'center',
        },
    }).apply({});

    const [resourceGalleryState, dispatch] = React.useReducer(ResourceGalleryReducer, {});

    const { resolvedStyle } = useSystemStyles(ComponentTag.RESOURCE_GALLERY, {
        themeNameTag: ThemeNameTags.BLACK_YELLOW,
    });

    const handleClick = () => {
        dispatch({ type: ResourceGalleryActionType.FOCUS_IMAGE });
    };

    return (
        <section
            className={`${resolvedStyle[SystemStyleTag.MEMPHIS]} ${
                resolvedStyle[SystemStyleTag.BASIC_BORDER]
            } ${`mock`}`}
        >
            {props.gallery && (
                <div className={styles.resourceGalleryContainer}>
                    <div className={`${resolveSystemStyle(SystemStyleTag.BASIC_BORDER)}`}>
                        selected category: {resourceGalleryState.selectedCategoryTag}
                        <CategoryBrowser categories={gallery?.categories} />
                    </div>
                    <div className={styles.resourcePreview}>
                        <h2 className={styles.title}>{gallery?.name}</h2>
                        <img
                            onClick={handleClick}
                            src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature1.jpg"
                        />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature2.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature3.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/natura4.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life1.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life2.jpg" />
                    </div>
                </div>
            )}
        </section>
    );
};

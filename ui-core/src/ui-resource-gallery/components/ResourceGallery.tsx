import React from 'react';
import { ComponentTag, SystemStyleTag, ThemeNameTags } from 'ui-core-schema';
import { createUseStyles } from 'react-jss';
import { CategoryBrowser, ResourceGalleryProps } from 'ui-resource-gallery';
import { resolveSystemStyle, useSystemStyles } from 'ui-style-service';
import { ResourceGalleryReducer } from './ResourceGalleryReducer';

const COMPONENT_TAG = ComponentTag.RESOURCE_GALLERY;

export const ResourceGallery: React.FC<ResourceGalleryProps> = (props) => {
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

    const { resolvedStyle, resolvedThemeContext } = useSystemStyles(ComponentTag.RESOURCE_GALLERY, {
        themeNameTag: ThemeNameTags.BLACK_YELLOW,
    });

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
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature1.jpg" />
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

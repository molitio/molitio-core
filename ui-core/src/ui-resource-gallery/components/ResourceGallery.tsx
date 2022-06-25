import React from 'react';
import { CategoryBrowser, ResourceGalleryProps } from 'ui-resource-gallery';
import styles from '../styles/ResourceGallery.module.scss';
import systemStyles from '../styles/SystemStyle';
import { ResourceGalleryReducer } from './ResourceGalleryReducer';

export const ResourceGallery: React.FC<ResourceGalleryProps> = ({ ...props }) => {
    const [resourceGalleryState, dispatch] = React.useReducer(ResourceGalleryReducer, {});

    return (
        <section className={`${systemStyles['section-rounded'].style} ${systemStyles['section-text-bold'].style}`}>
            {props.gallery && (
                <div className={styles.resourceGalleryContainer}>
                    selected category: {resourceGalleryState.selectedCategoryTag}
                    <div
                        id="id-resource-gallery"
                        className={`${styles.categoryBrowser} ${{
                            ...systemStyles['section-box-shadow'].style,
                        }}`}
                    >
                        <CategoryBrowser categories={props.gallery.categories} />
                    </div>
                    <div className={styles.resourcePreview}>
                        <h2 className={styles.title}>{props.gallery.name}</h2>
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

import { CategoryBrowser, ResourceGalleryProps } from 'ui-resource-gallery';
import styles from '../styles/ResourceGallery.module.scss';

export const ResourceGallery: React.FC<ResourceGalleryProps> = ({ ...props }) => {
    return (
        <section className={styles.resourceGallerySection}>
            {props.gallery && (
                <div className={styles.resourceGalleryContainer}>
                    <div className={styles.categoryBrowser}>
                        <CategoryBrowser categories={props.gallery.categories} />
                    </div>
                    <div className={styles.resourcePreview}>
                        <h2 className={styles.title}>{props.gallery.name}</h2>
                    </div>
                </div>
            )}
        </section>
    );
};

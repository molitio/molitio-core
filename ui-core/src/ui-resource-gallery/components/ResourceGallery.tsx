import { TCategory } from 'ui-core-models/types/Gallery/TCategory';
import { TImageResource } from 'ui-core-models';
import { ResourceGalleryProps } from 'ui-resource-gallery';
import styles from '../styles/ResourceGallery.module.scss';

export const ResourceGallery: React.FC<ResourceGalleryProps> = ({ ...props }) => {
    return (
        <section>
            {props.gallery ? (
                <div>
                    <h2>{props.gallery.name}</h2>

                    {Array.from([...(props.gallery.categories ?? new Map<string, TCategory>())]).map((category) => (
                        <div key={category[0]}>
                            <h2>{category[1].categoryName}</h2>

                            {Array.from([...(category[1].resources ?? new Map<string, TImageResource>())]).map(
                                (resource) => (
                                    <div className={styles.resourceContainer} key={resource[0]}>
                                        <h2>{resource[1].resourceId}</h2>
                                        <br />

                                        <img
                                            className={styles.imagePosition}
                                            src={resource[1].imageUrl}
                                            alt={resource[0]}
                                        />
                                        <br />
                                    </div>
                                ),
                            )}

                            <br />
                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
        </section>
    );
};

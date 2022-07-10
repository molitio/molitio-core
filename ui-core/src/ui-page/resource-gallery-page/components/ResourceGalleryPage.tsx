import React from 'react';
import { ResourceGallery } from 'ui-resource-gallery';
import { ResourceGalleryPageProps } from '../interfaces/ResourceGalleryPageProps';

export const ResourceGalleryPage: React.FC<ResourceGalleryPageProps> = (props) => {

const {gallery} = props;

    return <ResourceGallery gallery={gallery ?? { name: 'N/A' }} />;
};

import React from 'react';
import { ResourceGallery } from 'ui-resource-gallery';
import { ResourceGalleryPageProps } from '../interfaces/ResourceGalleryPageProps';

export const ResourceGalleryPage: React.FC<ResourceGalleryPageProps> = ({ ...props }) => {
    return <ResourceGallery gallery={props.gallery ?? { name: 'N/A' }} />;
};

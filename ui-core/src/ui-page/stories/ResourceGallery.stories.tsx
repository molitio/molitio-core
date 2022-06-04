import { Story, Meta } from '@storybook/react';
import { ResourceGallery } from '../resource-gallery/components/ResourceGalleryPage';

const meta: Meta = {
    title: 'molitio-core/Pages/Resource Gallery',
    component: ResourceGallery,
};

export default meta;

const Template: Story = () => <ResourceGalleryPage></ResourceGalleryPage>;

export const ResourceGalleryPage = Template.bind({});
ResourceGalleryPage.parameters = {
    controls: { hideNoControlsWarning: true },
};

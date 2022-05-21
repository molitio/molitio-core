import { Story, Meta } from '@storybook/react';
import { ResourceGallery } from '../resource-gallery/components/ResourceGallery';

const meta: Meta = {
    title: 'molitio-core/Pages/Resource Gallery',
    component: ResourceGallery,
};

export default meta;

const Template: Story = () => <ResourceGallery></ResourceGallery>;

export const ResourceGalleryPage = Template.bind({});
ResourceGalleryPage.parameters = {
    controls: { hideNoControlsWarning: true },
};
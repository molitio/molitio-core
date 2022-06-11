import { Story, Meta } from '@storybook/react';
import { TCategory } from 'ui-core-models/types/Gallery/TCategory';
import { TResource } from 'ui-core-models/types/Resources/TResource';
import { ResourceGallery } from 'ui-resource-gallery';
import { ResourceGalleryProps } from 'ui-resource-gallery/interfaces/ResourceGalleryProps';

const fillResources = () => {
    const tajkepGyujtemeny = new Map<string, TResource>();
    tajkepGyujtemeny.set('windózháttér', {
        resourceId: 'mockId01',
        imageTag: '01',
        imageUrl: 'https://www.notebook.hu/blog/wp-content/uploads/2019/07/windows_xp_bliss-wide-1024x640.jpg',
    });
    tajkepGyujtemeny.set('szipferrari', {
        resourceId: 'mockId02',
        imageTag: '02',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg',
    });

    return tajkepGyujtemeny;
};

const fillCategories = () => {
    const paintingGallery = new Map<string, TCategory>();

    paintingGallery.set('tajkep', {
        categoryName: 'Tájkép',
        dataSource: 'mock',
        resources: fillResources(),
    });
    paintingGallery.set('eletkep', {
        categoryName: 'Életkép',
        dataSource: 'mock',
        resources: fillResources(),
    });
    paintingGallery.set('portrait', {
        categoryName: 'Portré',
        dataSource: 'mock',
        resources: fillResources(),
    });

    console.log(`paintingGallery.size: ${paintingGallery.size}`);
    return paintingGallery;
};

const storyArgs: ResourceGalleryProps = {
    gallery: { name: 'Galéria', categories: fillCategories() },
};

const meta: Meta = {
    title: 'molitio-core/Gallery/Resource Gallery',
    component: ResourceGallery,
    args: { ...storyArgs },
};
export default meta;

const Template: Story<ResourceGalleryProps> = (args) => <ResourceGallery {...args} />;

export const ResourceGalleryStory = Template.bind({});
ResourceGalleryStory.args = {
    ...storyArgs,
};

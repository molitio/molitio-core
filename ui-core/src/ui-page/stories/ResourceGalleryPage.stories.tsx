import { Story, Meta } from '@storybook/react';
import { ResourceGalleryPage } from '../resource-gallery/components/ResourceGalleryPage';
import { TCategory } from 'ui-core-models/types/Gallery/TCategory';
import { TResource } from 'ui-core-models/types/Resources/TResource';
import { AppShell } from 'ui-common';
import { ResourceGalleryProps } from 'ui-resource-gallery';

const fillResources = () => {
    const tajkepGyujtemeny = new Map<string, TResource>();
    tajkepGyujtemeny.set('windózháttér', {
        resourceId: 'mockId01',
        imageUrl: 'https://www.notebook.hu/blog/wp-content/uploads/2019/07/windows_xp_bliss-wide-1024x640.jpg',
    });
    tajkepGyujtemeny.set('szipferrari', {
        resourceId: 'mockId02',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg',
    });

    return tajkepGyujtemeny;
};

const fillCategories = () => {
    const paintingGallery = new Map<string, TCategory>();

    paintingGallery.set('tajkep', {
        categoryName: 'tajkep',
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
    title: 'molitio-core/Pages/Resource Gallery',
    component: ResourceGalleryPage,
    args: {
        ...storyArgs,
    },
};

export default meta;

const Template: Story = (args) => (
    <AppShell applyGlobalStyleRules>
        <ResourceGalleryPage gallery={args.gallery}></ResourceGalleryPage>
    </AppShell>
);

export const PaintingGalleryPage = Template.bind({});
PaintingGalleryPage.parameters = {
    controls: { hideNoControlsWarning: true },
};

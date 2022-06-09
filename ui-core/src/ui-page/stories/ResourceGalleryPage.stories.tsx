import { Story, Meta } from '@storybook/react';
import { ResourceGalleryPage } from '../resource-gallery/components/ResourceGalleryPage';
import { AppShell } from 'ui-common';

const meta: Meta = {
    title: 'molitio-core/Pages/Resource Gallery',
    component: ResourceGalleryPage,
    args: {
        gallery: {
            name: 'storybook gallery example',
            categories: {
                nature: {
                    categoryName: 'Nature',
                    resources: {},
                },
            },
        },
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

import { Story, Meta } from '@storybook/react';
import { Logo } from 'ui-common';
import { LayoutColumn, MultiColumnLayout } from 'ui-layout';
import { MultiColumnPage } from 'ui-page';
import { CircleGradientHighlightSvg } from 'ui-svg';

const meta: Meta = {
    title: 'molitio-core/Layout/Multi Column Page',
    component: MultiColumnPage,
};
export default meta;

const Template: Story = () => (
    <MultiColumnPage
        pageSections={[
            {
                anchor: 'one',
                element: (
                    <MultiColumnLayout
                        layoutColumns={[
                            <LayoutColumn>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <CircleGradientHighlightSvg dimensions={{ width: '100%', height: '100%' }}>
                                    <Logo url="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/nest-media-ui/nestmedia_logo_final_one_900.png" />
                                </CircleGradientHighlightSvg>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <h1>this is on the right</h1>
                            </LayoutColumn>,
                        ]}
                    />
                ),
            },
            {
                anchor: 'two',
                element: (
                    <MultiColumnLayout
                        layoutColumns={[
                            <LayoutColumn>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                        ]}
                    />
                ),
            },
            {
                anchor: 'tree',
                element: (
                    <MultiColumnLayout
                        layoutColumns={[
                            <LayoutColumn>
                                <h1>im on the left</h1>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <h1>hi, this is center</h1>
                            </LayoutColumn>,
                            <LayoutColumn>
                                <h1>this is on the right</h1>
                            </LayoutColumn>,
                        ]}
                    />
                ),
            },
        ]}
    ></MultiColumnPage>
);

export const NoClildInternal = Template.bind({});
NoClildInternal.parameters = {
    controls: { hideNoControlsWarning: true },
};

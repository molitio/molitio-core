import { Story, Meta } from '@storybook/react';
import { LandingPage } from '../component/LandingPage';

const meta: Meta = {
    title: 'molitio-core/Pages/Landing Page',
    component: LandingPage,
};

export default meta;

const Template: Story = () => (
    <LandingPage>
        <h1>title content</h1>
    </LandingPage>
);

export const LandingPageStory = Template.bind({});
LandingPageStory.args = {};

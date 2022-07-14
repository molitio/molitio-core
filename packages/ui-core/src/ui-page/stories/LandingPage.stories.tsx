import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LandingPage } from '../landing-page/components/LandingPage';

const meta: Meta = {
    title: 'molitio-core/Pages/Landing Page',
    component: LandingPage,
};

export default meta;

const Template: Story = () => <LandingPage pageTitle="Landing Page"></LandingPage>;

export const DefaultLandingPage = Template.bind({});
DefaultLandingPage.parameters = {
    controls: { hideNoControlsWarning: true },
};

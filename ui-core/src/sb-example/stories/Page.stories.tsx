import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Page, PageProps } from './Page';
import { LoggedIn, LoggedOut } from './Header.stories';

export default {
    title: 'Example/Page',
    component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedInComponent = Template.bind({});
LoggedIn.args = {
    ...LoggedIn.args,
};

export const LoggedOutComponent = Template.bind({});
LoggedOut.args = {
    ...LoggedOut.args,
};

import { Story, Meta } from '@storybook/react';
import { ThemeProps } from 'ui-theme-context';
import { NavMenuComponentProps } from '../../index';
import { NavSegmentProps } from '../../index';
declare const meta: Meta;
export default meta;
export declare const NavMenuStory: Story<NavMenuComponentProps & ThemeProps>;
export declare const NavSegmentStory: Story<NavSegmentProps & ThemeProps>;

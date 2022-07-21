import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeNameTags, NavSegment } from "@molitio/system-schema";
import {
  NavSegmentComponent,
  NavMenuComponentProps,
  NavMenuComponent,
  NavSegmentProps,
  StyledThemeContextProvider,
  StyledThemeProps,
} from "@molitio/ui-core";

const servicesPageArgs: NavSegment[] = [
  {
    pathSegment: "/services",
    itemName: "Services",
    navSegments: [
      {
        pathSegment: "/web",
        itemName: "web",
      },
      {
        pathSegment: "/design",
        itemName: "design",
      },
    ],
  },
];

const aboutPageArgs: NavSegment[] = [
  {
    pathSegment: "/about",
    itemName: "about",
    navSegments: [
      {
        pathSegment: "/team",
        itemName: "team",
        navSegments: [
          {
            pathSegment: "/sanyi",
            itemName: "Sanyi",
            navSegments: [
              {
                pathSegment: "/motivation",
                itemName: "mission",
              },
            ],
          },
          {
            pathSegment: "/Peti",
            itemName: "Peti",
            navSegments: [
              {
                pathSegment: "/motivation",
                itemName: "mission",
              },
            ],
          },
        ],
      },
    ],
  },
];

const navMenuArgs: NavMenuComponentProps & StyledThemeProps = {
  pageCollection: {
    tag: "basicNavMenu01",
    siteDisplayName: "Test Site",
    pageCollection: new Map([
      [
        "aboutIdTag",
        {
          pageName: "About",
          pathSegment: "/about",
          navSegments: servicesPageArgs,
        },
      ],
      [
        "servicesIdTag",
        {
          pageName: "Services",
          pathSegment: "/services",
          navSegments: aboutPageArgs,
        },
      ],
      [
        "contactIdTag",
        {
          pageName: "Contact",
          pathSegment: "/contact",
        },
      ],
    ]),
  },
  themeName: ThemeNameTags.BLACK_YELLOW,
};

const meta: Meta = {
  title: "molitio-core/Components/Nav Menu",
  component: NavMenuComponent,
  args: {
    ...navMenuArgs,
  },
  argTypes: {
    themeName: {
      control: {
        type: "select",
        options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA],
      },
    },
  },
};

export default meta;

const NavMenuTemplate: Story<NavMenuComponentProps & StyledThemeProps> = (
  args
) => (
  <StyledThemeContextProvider themeName={args.themeName}>
    <NavMenuComponent {...args} />
  </StyledThemeContextProvider>
);

export const NavMenuStory = NavMenuTemplate.bind({});
NavMenuStory.args = {
  ...navMenuArgs,
};

const NavSegmentTemplate: Story<NavSegmentProps & StyledThemeProps> = (
  args
) => (
  <StyledThemeContextProvider themeName={args.themeName}>
    <NavSegmentComponent {...args} />;
  </StyledThemeContextProvider>
);

export const NavSegmentStory = NavSegmentTemplate.bind({});
NavSegmentStory.args = {
  navSegment: {
    ...servicesPageArgs[0],
  },
};

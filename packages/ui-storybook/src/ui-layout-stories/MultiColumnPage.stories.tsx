import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  Logo,
  MultiColumnPage,
  CircleGradientHighlightSvg,
  LayoutColumn,
  MultiColumnLayout,
} from "@molitio/ui-core";

const meta: Meta = {
  title: "molitio-core/Layout/Multi Column Page",
  component: MultiColumnPage,
};
export default meta;

const Template: Story = () => (
  <MultiColumnPage
    pageSections={[
      {
        anchor: "one",
        element: (
          <MultiColumnLayout
            layoutColumns={[
              <LayoutColumn>
                <h1>im on the left</h1>
              </LayoutColumn>,
              <LayoutColumn>
                <CircleGradientHighlightSvg
                  dimensions={{ width: "100%", height: "100%" }}
                >
                  <Logo
                    url={`https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/pexels-kalai-selvam-800752.jpg`}
                    opacity={0.8}
                  />
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
        anchor: "two",
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
        anchor: "tree",
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

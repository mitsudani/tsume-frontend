import { $enum } from "ts-enum-util";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link, { LinkVariant } from "../components/Link";

export default {
  title: "Link",
  component: Link,
  args: {
    children: "Link",
    to: "https://github.com/mitsudani",
  },
  argTypes: {
    variant: {
      control: {
        labels: $enum(LinkVariant).getKeys(),
      },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: LinkVariant.Primary,
};
Primary.parameters = {
  backgrounds: {
    default: "pastel-salmon",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: LinkVariant.Secondary,
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: LinkVariant.ButtonPrimary,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  variant: LinkVariant.ButtonSecondary,
};

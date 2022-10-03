import { $enum } from "ts-enum-util";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonVariant } from "../components/Button";

export default {
    title: "Button",
    component: Button,
    args: {
        children: "Button",
    },
    argTypes: {
        variant: {
            control: {
                labels: $enum(ButtonVariant).getKeys(),
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: ButtonVariant.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: ButtonVariant.Secondary,
};

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
    variant: ButtonVariant.LinkPrimary,
};
LinkPrimary.parameters = {
    backgrounds: {
        default: "lilac",
    },
};

export const LinkSecondary = Template.bind({});
LinkSecondary.args = {
    variant: ButtonVariant.LinkSecondary,
};
LinkSecondary.parameters = {
    backgrounds: {
        default: "lilac",
    },
};

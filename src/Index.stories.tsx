import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FontBoldIcon } from "@radix-ui/react-icons";

import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Marbella/Toggle",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <Toggle aria-label="Toggle italic">
    <FontBoldIcon className="h-4 w-4" />
  </Toggle>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

import { Meta, StoryObj } from "@storybook/react";
import {
  TextInput,
  TextInputRootProps,
} from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder="Enter your name" />
      ]
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WhitoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    placeholder: "Enter your name",
    children: (

        <TextInput.Input placeholder="Enter your name" />
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};


import { JSX } from "react/jsx-runtime";
import { IProgressBar } from "..";
import { parameters, props } from "../props";
import { ProgressBarController } from "./ProgressBar.controller";
import { action } from "@storybook/addon-actions";

const story = {
  title: "feedback/ProgressBar",
  component: ProgressBarController,
  argTypes: { ...props, onComplete: { action: "onAnimationEnd" } },
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IProgressBar) => (
  <ProgressBarController {...args} />
);
Default.args = {
  height: "4px",
  appearance: "primary",
  duration: 3000,
  paused: false,
  onComplete: action("onAnimationEnd"),
};

export { Default };
export default story;

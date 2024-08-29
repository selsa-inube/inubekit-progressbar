import { JSX } from "react/jsx-runtime";
import { IProgressBar } from "..";
import { parameters, props } from "../props";
import { ProgressBarController } from "./ProgressBar.controller";

const story = {
  title: "Components/ProgressBar",
  component: ProgressBarController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IProgressBar) => (
  <ProgressBarController {...args} />
);

export { Default };
export default story;

const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;

type IProgressBarAppearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component:
        "A progress bar that visually indicates the progress of a task or process.",
    },
  },
};

const props = {
  animated: {
    control: { type: "boolean" },
    description:
      "If true, adds a shimmer animation to indicate activity when progress is stuck.",
    table: {
      defaultValue: { summary: false },
    },
  },
  appearance: {
    control: { type: "select" },
    description: "Determines the color scheme of the progress bar.",
    options: appearances,
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  height: {
    control: { type: "text" },
    description:
      "Sets the height of the progress bar, allowing customization of its thickness.",
    table: {
      defaultValue: { summary: "4px" },
    },
  },
  progress: {
    control: { type: "number" },
    description: "Represents the progress percentage (0 to 100).",
    table: {
      defaultValue: { summary: 0 },
    },
  },
  onComplete: {
    control: { type: "function" },
    description:
      "Callback function that is triggered when progress reaches 100%.",
  },
};

export { parameters, props };
export type { IProgressBarAppearance };

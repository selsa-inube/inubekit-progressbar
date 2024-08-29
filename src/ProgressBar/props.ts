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
  height: {
    control: { type: "text" },
    description:
      "Sets the height of the progress bar, allowing customization of its thickness.",
    table: {
      defaultValue: { summary: "4px" },
    },
  },
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "Determines the color scheme of the progress bar.",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  progress: {
    control: { type: "number" },
    description: "Represents the progress percentage (0 to 100).",
    table: {
      defaultValue: { summary: 0 },
    },
  },
  animated: {
    control: { type: "boolean" },
    description:
      "If true, adds a shimmer animation to indicate activity when progress is stuck.",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { props, parameters };
export type { IProgressBarAppearance };

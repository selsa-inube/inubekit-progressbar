import { IProgressBarAppearance } from "./props";
import { StyledProgressBar } from "./styles";

interface IProgressBar {
  animated?: boolean;
  appearance?: IProgressBarAppearance;
  height?: string;
  progress: number;
}

const ProgressBar = (props: IProgressBar) => {
  const {
    animated = false,
    appearance = "primary",
    height = "4px",
    progress = 0,
  } = props;

  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <StyledProgressBar
      $animated={animated}
      $appearance={appearance}
      $height={height}
      $progress={safeProgress}
    />
  );
};

export { ProgressBar };
export type { IProgressBar };

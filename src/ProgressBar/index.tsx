import { IProgressBarAppearance } from "./props";
import { StyledProgressBar } from "./styles";

interface IProgressBar {
  height?: string;
  appearance?: IProgressBarAppearance;
  progress: number;
  animated?: boolean;
}

const ProgressBar = (props: IProgressBar) => {
  const {
    height = "4px",
    appearance = "primary",
    progress = 0,
    animated = false,
  } = props;

  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <StyledProgressBar
      $height={height}
      $appearance={appearance}
      $progress={safeProgress}
      $animated={animated}
    />
  );
};

export { ProgressBar };
export type { IProgressBar };

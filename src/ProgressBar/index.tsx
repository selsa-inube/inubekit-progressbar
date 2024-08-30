import { AnimationEvent } from "react";
import { IProgressBarAppearance } from "./props";
import { StyledProgressBar } from "./styles";

interface IProgressBar {
  animated?: boolean;
  appearance?: IProgressBarAppearance;
  height?: string;
  progress: number;
  onComplete?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const ProgressBar = (props: IProgressBar) => {
  const {
    animated = false,
    appearance = "primary",
    height = "4px",
    progress = 0,
    onComplete,
  } = props;

  const safeProgress = Math.min(100, Math.max(0, progress));

  const interceptOnComplete = (event: AnimationEvent<HTMLDivElement>) => {
    try {
      if (safeProgress === 100 && onComplete) {
        onComplete(event);
      }
    } catch (error) {
      console.error(`Error when invoking onComplete callback: ${error}`);
    }
  };

  return (
    <StyledProgressBar
      id="inubekit-progressbar"
      $animated={animated}
      $appearance={appearance}
      $height={height}
      $progress={safeProgress}
      onAnimationEnd={interceptOnComplete}
    />
  );
};

export { ProgressBar };
export type { IProgressBar };

import { useState, useEffect } from "react";
import { ProgressBar } from "../index";
import { StyledText } from "./styles";

const ProgressBarController = () => {
  const [progress, setProgress] = useState(0);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        if (prevProgress >= 50 && prevProgress < 70) {
          setIsStuck(true);
          return prevProgress;
        } else {
          setIsStuck(false);
          return prevProgress + 0.5;
        }
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div>
      <ProgressBar
        progress={progress}
        animated={isStuck}
        appearance="primary"
        height="8px"
      />
      <StyledText>Current Progress: {progress.toFixed(1)}%</StyledText>
      {isStuck && (
        <StyledText>
          The progress bar is currently stuck, but the process is still ongoing.
        </StyledText>
      )}
    </div>
  );
};

export { ProgressBarController };

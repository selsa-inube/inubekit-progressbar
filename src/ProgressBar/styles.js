import styled, { css, keyframes } from "styled-components";
import { inube } from "@inubekit/foundations"; 

const shimmer = keyframes`
  0% {
    transform: translateX(0%);
  } 
  100% {
    transform: translateX(100%);
  }
`;

const StyledProgressBar = styled.div`
  width: ${({ $progress }) => `${$progress}%`};
  height: ${({ $height }) => $height};
  background-color: ${({ theme, $appearance }) => {
    return (
      theme?.progressbar?.[$appearance]?.background.color ||
      inube.progressbar[$appearance].background.color
    );
  }};
  transition: width 0.4s ease;

  ${({ $animated, theme, $appearance }) =>
    $animated &&
    css`
      position: relative;
      overflow: hidden;
      background: ${theme?.progressbar?.[$appearance]?.animation.color ||
      inube.progressbar[$appearance].animation.color};

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => `linear-gradient(
          90deg,
          ${theme?.progressbar?.[$appearance]?.track.color || inube.progressbar[$appearance].track.color} 25%,
          ${theme?.progressbar?.[$appearance]?.animation.color || inube.progressbar[$appearance].animation.color} 50%,
          ${theme?.progressbar?.[$appearance]?.track.color || inube.progressbar[$appearance].track.color} 100%
          
        );`};
        animation: ${shimmer} 2s linear infinite;
      }
    `}
`;

export { StyledProgressBar };

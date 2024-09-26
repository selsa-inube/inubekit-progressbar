import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledText = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: ${inube.typography.body.large.lineHeight};
  font-size: ${inube.typography.body.large.size};
  letter-spacing: ${inube.typography.body.large.tracking};
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: start;
  color: ${inube.palette.blue.B400};
`;

export { StyledText };

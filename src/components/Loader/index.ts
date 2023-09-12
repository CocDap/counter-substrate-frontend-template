import { styled } from "@mui/material"

const Loader = styled('span')<{color?: string}>`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  border: ${({ color}) => `2px solid ${color || '#fff'}`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  };
`;

export default Loader;
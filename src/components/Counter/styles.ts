import { Button, styled } from "@mui/material";
import FlexBox from "../Flexbox";

export const CounterContainer = styled(FlexBox)(() => ({
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minHeight: 'calc(100vh - 77px)',
}));

export const StyledButton = styled(Button)(() => ({
  width: 100,
  fontSize: 24
}));
import { Dialog, styled } from "@mui/material";
import FlexBox from "../Flexbox";

export const DialogContainer = styled(Dialog)(() => ({
  '.MuiPaper-root': {
    width: '400px',
    margin: 0,
    padding: '20px'
  }
}));

export const AccountWrapper = styled(FlexBox)(({ theme }) => ({
  padding: 16,
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  borderRadius: 16,
  cursor: 'pointer',

  ':not(:last-of-type)': {
    marginBottom: '12px',
  }
}));
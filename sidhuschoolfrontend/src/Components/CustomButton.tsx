import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: ('limegreen'),
  '&:hover': { backgroundColor: 'green' },
  color: theme.palette.background.default
}))
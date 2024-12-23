import { IconButton, styled } from "@mui/material";

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: 'limegreen',
  '&:hover': { backgroundColor: 'green' },
}))
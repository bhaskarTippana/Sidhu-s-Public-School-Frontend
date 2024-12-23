import { styled, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)(({ theme }) => {
  return {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.grey[500], // Gray color from the theme
      },
      '&:hover fieldset': {
        borderColor: theme.palette.grey[500], // Hover state border color
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.grey[500], // Focused state border color
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.grey[500], // Default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.grey[500], // Focused label color
    },
  };
});

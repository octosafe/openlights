import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingProps {
  message?: string;
  size?: number;
}

export const Loading = ({ message = "Loading...", size = 40 }: LoadingProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="200px"
    gap={2}
  >
    <CircularProgress size={size} />
    <Typography variant="body2" color="text.secondary">
      {message}
    </Typography>
  </Box>
);
import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';

const FooterComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.grey[900],
        paddingY: 1,
      }}
      component='footer'
    >
      <Container>
        <Typography
          sx={{
            color: 'white'
          }}
        >
          Yaroslav
        </Typography>
      </Container>
    </Box>
  );
};

export default React.memo(FooterComponent);

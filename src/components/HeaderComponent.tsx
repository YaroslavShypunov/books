import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BackButtonComponent from './BackButtonComponent';

interface IHeaderComponent {
  name?: string
}

const HeaderComponent = ({ name }: IHeaderComponent) => {

  return (
    <Box
      component='header'
      sx={{
        paddingY: 3,
      }}
    >
      <Container sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        alignItems: 'center',
      }}>
        <Typography variant='h4'>👋🏻 Hello</Typography>
        <BackButtonComponent />
      </Container>
    </Box>
  );
};

export default React.memo(HeaderComponent);

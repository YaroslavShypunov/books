import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

interface IContainerComponent {
  children: ReactNode
}

const ContainerComponent = ({ children }: IContainerComponent) => {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',

    }}>
      <HeaderComponent />
      <Container sx={{
        paddingY: 4,
        flexGrow: 1
      }}>
        {children}
      </Container>
      <FooterComponent />
    </Box>
  );
};

export default React.memo(ContainerComponent);

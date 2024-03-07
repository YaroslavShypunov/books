import { Card, Grid } from '@mui/material';
import React, { ReactNode } from 'react';

interface IBookCardContainerComponent {
  children: ReactNode
}

const BookCardContainerComponent = ({ children }: IBookCardContainerComponent) => {
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={3}
      sx={{
        padding: 1,
        display: 'flex',
      }}
    >
      <Card sx={{ width: '100%', height: '100%' }}>
        {children}
      </Card>
    </Grid>
  );
};

export default React.memo(BookCardContainerComponent);

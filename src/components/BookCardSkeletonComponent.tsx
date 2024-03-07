import React from 'react';
import BookCardContainerComponent from './BookCardContainerComponent';
import { CardContent, Skeleton } from '@mui/material';

const BookCardSkeletonComponent = () => {
  return (
    <BookCardContainerComponent>
      <>
        <Skeleton
          sx={{
            height: 160,
            width: '100%',
          }}
          animation="wave"
          variant="rectangular"
        />
        < CardContent >
          <Skeleton animation="wave" height={30} width="80%" />
        </CardContent>
      </>
    </BookCardContainerComponent >
  );
};

export default React.memo(BookCardSkeletonComponent);

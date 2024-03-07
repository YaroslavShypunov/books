import React from 'react';
import { IBook } from '../models';
import BookCardComponent from './BookCardComponent';
import BookCardSkeletonComponent from './BookCardSkeletonComponent';
import { Grid, Typography } from '@mui/material';

interface IBookListComponent {
  list?: IBook[]
  loading: boolean
}

const BookListComponent = ({ list = [], loading }: IBookListComponent) => {

  if (loading) {
    return <>
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
      <BookCardSkeletonComponent />
    </>
  }
  if (!list?.length) {
    return <Grid item xs={12}>
      <Typography textAlign='center'>It is empty</Typography>
    </Grid>
  }

  return (
    <>
      {list.map(({ id, title, thumbnail }) =>
        <BookCardComponent
          key={id}
          title={title}
          id={id}
          iamgeSrc={thumbnail?.lqip}
        />
      )}
    </>
  );
};

export default React.memo(BookListComponent);

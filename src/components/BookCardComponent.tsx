import { CardActionArea, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import React from 'react';
import BookCardContainerComponent from './BookCardContainerComponent';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';

interface IBookCardComponent {
  title: string
  id: number
  iamgeSrc: string
}

const BookCardComponent = ({ title, id, iamgeSrc }: IBookCardComponent) => {
  const theme = useTheme();
  return (
    <BookCardContainerComponent>
      <Link
        to={`${ROUTES.BOOK}/${id}`}
      >
        <CardActionArea
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <CardMedia
            component="img"
            alt={title}
            sx={{
              aspectRatio: '16/9',
              objectFit: 'cover'
            }}
            image={iamgeSrc}
          />
          <CardContent>
            <Typography
              gutterBottom
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </BookCardContainerComponent>
  );
};

export default React.memo(BookCardComponent);

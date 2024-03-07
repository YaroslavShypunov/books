import React, { useMemo } from 'react';
import ContainerComponent from '../../components/ContainerComponent';
import { Grid, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetArtItemQuery } from '../../store/services/art';
import { IBook } from '../../models';

const BookPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const { data: response } = useGetArtItemQuery({ id });
  const {
    title,
    artist_display,
    dimensions,
    main_reference_number,
    date_display,
    thumbnail
  }: IBook = useMemo(() => response?.data || {}, [response])


  if (!response) {
    return null
  }
  return (
    <ContainerComponent>
      <Grid container>
        <Grid item xs={12} md={6} lg={7}>
          <img
            src={thumbnail?.lqip}
            alt={thumbnail?.alt_text}
            className='image'
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          sx={{
            paddingLeft: 4,
            [theme.breakpoints.down("md")]: {
              paddingLeft: 0,
              paddingTop: 4
            },
            [theme.breakpoints.down("sm")]: {
              paddingTop: 2
            },
          }}
        >
          <Typography
            variant='h1'
            sx={{
              wordBreak: 'break-word',
              marginBottom: 3,
              fontSize: 50,
              [theme.breakpoints.down("sm")]: {
                marginBottom: 2,
                fontSize: 30,
              },
            }}
          >
            {title}
          </Typography>
          <Typography>Artist Display: {artist_display}</Typography>
          <Typography>Date Display: {date_display}</Typography>
          <Typography>Reference Number: {main_reference_number}</Typography>
          <Typography
            sx={{
              marginTop: 3,
            }}
          >
            {dimensions}
          </Typography>
        </Grid>
      </Grid>
    </ContainerComponent >
  );
};

export default React.memo(BookPage);

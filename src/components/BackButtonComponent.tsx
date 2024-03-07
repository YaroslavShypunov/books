import { Button } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ROUTES from '../constants/routes';

interface IBackButtonComponent {
  name?: string
}

const BackButtonComponent = ({ name }: IBackButtonComponent) => {
  const { id } = useParams();

  if (!id) {
    return null
  }
  return (
    <Link to={ROUTES.HOME}>
      <Button variant='outlined' color='secondary'>Back</Button>
    </Link>
  );
};

export default React.memo(BackButtonComponent);

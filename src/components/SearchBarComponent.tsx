import { Button, Grid } from '@mui/material';
import React, { useCallback } from 'react';
import TextFieldComponent from './TextFieldComponent';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import CategoriesAutocompleteComponent from './CategoriesAutocompleteComponent';
import { ISearchValues } from '../models';

interface ISearchBarComponent {
  handleSearch: (values: ISearchValues) => void
}

const FormSchema = () =>
  Yup.object().shape({
    title: Yup.string().min(3, 'Field must be at least 3 characters long.'),
  });

// To save time, I combined the form validation and the search bar together
const SearchBarComponent = ({ handleSearch }: ISearchBarComponent) => {
  const initialValues = {
    title: '',
    categories: []
  }

  const handleSubmit = useCallback((values: ISearchValues) => {
    handleSearch(values)
  }, [handleSearch])

  return (
    <Grid
      item
      xs={12}
      sx={{
        paddingBottom: 4,
      }}
    >
      <Formik
        validationSchema={FormSchema()}
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <TextFieldComponent
                  id="title"
                  label="Title"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <CategoriesAutocompleteComponent />
              </Grid>

              <Grid item xs={12} md={2} >
                <Button
                  fullWidth
                  variant='contained'
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>

          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default React.memo(SearchBarComponent);

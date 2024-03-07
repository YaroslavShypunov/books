import { Autocomplete, TextField } from '@mui/material';
import React, { SyntheticEvent, useCallback } from 'react';
import { useGetCategoriesQuery } from '../store/services/art';
import { ICategory } from '../models';
import { FormikProps, FormikValues, useFormikContext } from 'formik';

const CategoriesAutocompleteComponent = () => {
  const {
    values,
    setFieldValue,
  }: FormikProps<FormikValues> = useFormikContext();
  const { data: response } = useGetCategoriesQuery({});

  const handleChange = useCallback((_: SyntheticEvent, value: ICategory[]) => {
    setFieldValue('categories', value)
  }, [setFieldValue])

  return (
    <Autocomplete
      multiple
      id="categories"
      options={response?.data || []}
      getOptionLabel={(option) => option.title}
      defaultValue={values.categories}
      filterSelectedOptions
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Categories"
          placeholder="Favorites"
        />
      )}
    />
  );
};

export default React.memo(CategoriesAutocompleteComponent);

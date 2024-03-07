import { TextField } from "@mui/material";
import React, { useMemo } from "react";
import { FormikProps, FormikValues, useFormikContext } from "formik";

interface ITextFieldComponent {
  id: string;
  label: string;
}

const TextFieldComponent = ({
  id,
  label,
}: ITextFieldComponent) => {
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
  }: FormikProps<FormikValues> = useFormikContext();

  const value = useMemo(() => values[id], [id, values],);
  const touchedItem = useMemo(() => touched[id], [id, touched],);
  const error = useMemo(() => errors[id], [id, errors],);

  return (
    <TextField
      fullWidth
      id={id}
      name={id}
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touchedItem && Boolean(error)}
      helperText={touchedItem && (error as string)}
    />
  );
};

export default React.memo(TextFieldComponent);

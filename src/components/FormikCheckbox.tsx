import { Button, Checkbox } from "@mui/material";
import { FieldConfig, useField } from "formik";
import React from "react";

interface Props extends FieldConfig {
  // value: number;
  disabled?: boolean;
}

const FormikCheckbox = (props: Props) => {
  const { value, disabled } = props;
  const [field, meta] = useField(props);

  return <Checkbox {...field} disabled={disabled} />;
};

export default FormikCheckbox;

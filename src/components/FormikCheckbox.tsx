import { Button, Checkbox } from "@mui/material";
import { FieldConfig, useField, useFormikContext } from "formik";
import React from "react";

interface Props extends FieldConfig {
  index: number;
  disabled?: boolean;
}

const FormikCheckbox = (props: Props) => {
  const { index, disabled } = props;
  const [field, meta] = useField(props);
  const { values } = useFormikContext<any>();
  return <Checkbox {...field} disabled={index > values.checked.length }/>;
};

export default FormikCheckbox;

import { Checkbox } from "@mui/material";
import { FieldConfig, useField, useFormikContext } from "formik";
import React from "react";

interface Props extends FieldConfig {
  index: number;
}

const FormikCheckbox = (props: Props) => {
  const { index } = props;
  const [field] = useField(props);
  const { values } = useFormikContext<any>();
  return <Checkbox {...field} disabled={index > values.checked.length} />;
};

export default FormikCheckbox;

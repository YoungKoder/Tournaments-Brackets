import React from "react";

import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  InputProps,
  OutlinedInput,
} from "@material-ui/core";
import { useTBTextFieldStyles } from "./styles/usePlaneTexFieldStyles";

export interface TBTextFieldI extends FormControlProps {
  inputProps?: InputProps;
  label: string;
  helperText?: string;
}

export const TBTextField: React.FC<TBTextFieldI> = ({
  label,
  inputProps,
  id,
  error,
  helperText,
  ...props
}) => {
  const classes = useTBTextFieldStyles();
  const onFocus = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.target.select();
  };

  return (
    <FormControl {...props} className={classes.root}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        {...inputProps}
        id={id}
        name={id}
        inputProps={{ "aria-label": id }}
        aria-describedby={`${id}-helper-text`}
        onFocus={onFocus}
        error={error}
      />
      {error && (
        <FormHelperText id={`${id}-helper-text`}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

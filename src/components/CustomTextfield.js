import React from "react";

import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "white",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: theme.palette.common.lightBlue,
    },
  },
  label: {
    color: theme.palette.common.lightBlue,
  },
  outlinedInput: {
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      border: "2px solid",
      borderColor: theme.palette.common.lightBlue,
    },
  },

  field: {
    margin: "1em 0em",
  },

  notchedOutline: {
    borderColor: theme.palette.common.lightBlue,
    ":hover": {
      borderColor: theme.palette.common.lightBlue,
    },
  },
}));

const CustomTextfield = ({ placeholder, name, value, label, ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      variant="outlined"
      color="primary"
      placeholder={placeholder}
      label={label}
      name={name}
      value={value}
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.label,
        },
      }}
      InputProps={{
        classes: {
          input: classes.input,
          root: classes.outlinedInput,

          notchedOutline: classes.notchedOutline,
        },
      }}
      className={classes.field}
    />
  );
};

export default CustomTextfield;

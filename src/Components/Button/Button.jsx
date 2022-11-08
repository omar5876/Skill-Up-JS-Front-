import * as React from "react";
import MaterialButton from "@mui/material/Button";

const Button = ({ text, color, onClick, type }) => {
  return (
    <MaterialButton
      type={type}
      variant="outlined"
      sx={{
        color,
        borderColor: color,
        "&:hover": {
          borderColor: color,
        },
      }}
      onClick={onClick}
    >
      {text}
    </MaterialButton>
  );
};

export default Button;

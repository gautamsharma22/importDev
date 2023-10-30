import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CustomSnackBar = (props) => {
  const { vertical, horizontal, message, sev } = props;
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={props.open}
      autoHideDuration={2000}
      onClose={props.handleClose}
    >
      <Alert severity={sev} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export default CustomSnackBar;

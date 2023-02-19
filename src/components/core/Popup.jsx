import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function Popup({ info }) {
  return info.status === "success" ? (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert variant="outlined" severity="success">
        {info.message}
      </Alert>
    </Snackbar>
  ) : (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert variant="outlined" severity="error">
        {info.message}
      </Alert>
    </Snackbar>
  );
}

export default Popup;

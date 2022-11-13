import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../Button/Button";

const EditModal = ({ open, onClose, title, form }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div style={{ textAlign: "center" }}>
        <DialogTitle>MODIFICAR {title}</DialogTitle>
        <DialogContent>{form}</DialogContent>
      </div>
    </Dialog>
  );
};

export default EditModal;

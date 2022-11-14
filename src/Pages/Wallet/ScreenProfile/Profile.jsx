import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "../../../Components/Button/Button";
import UserForm from "../../../Components/Formularios/UserForm/UserForm";
import EditModal from "../../../Components/EditModal/EditModal";
import { useSelector } from "react-redux";
import Upload from "../../../Components/UploadImages/Upload";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Faltan traer datos con REDUX
const campos = [{ name: "Nombre" }, { name: "Apellido" }, { name: "Email" }];

function Profile() {
  const { firstName, lastName, email, avatar } = useSelector(
    (state) => state.auth
  );
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const handleEditClick = () => {
    setIsOpenEditModal(true);
  };

  const handleEditModalClose = () => {
    setIsOpenEditModal(false);
  };

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ m: 6, textAlign: "center" }} variant="h6">
            {avatar ? (
              <img
                src={avatar}
                width="100px"
                height="100px"
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <AccountCircleIcon sx={{ fontSize: "100px" }} />
            )}
            <Upload />
            <Typography sx={{ m: 4 }} variant="h6">
              Nombre: {firstName}
            </Typography>
            <Typography sx={{ m: 4 }} variant="h6">
              Apellido: {lastName}
            </Typography>
            <Typography sx={{ m: 4 }} variant="h6">
              Email: {email}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button text="Editar datos" onClick={handleEditClick} />
        <Button text="Eliminar usuario" />
      </CardActions>
      <EditModal
        open={isOpenEditModal}
        onClose={handleEditModalClose}
        title="USUARIO"
        form={<UserForm onClose={handleEditModalClose} />}
      />
    </Card>
  );
}

export default Profile;

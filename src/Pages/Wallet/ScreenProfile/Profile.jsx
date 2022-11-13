import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "../../../Components/Button/Button";
import UserForm from "../../../Components/Formularios/UserForm/UserForm";
import EditModal from "../../../Components/EditModal/EditModal";

// Faltan traer datos con REDUX
const campos = [{ name: "Nombre" }, { name: "Apellido" }, { name: "Email" }];

function Profile() {
  // const userData = useSelector(store => store.DATOSDELUSUARIO)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const handleEditClick = () => {
    setIsOpenEditModal(true);
  };

  const handleEditModalClose = () => {
    setIsOpenEditModal(false);
  };

  return (
    <Card>
      {/* Avatar */}
      <CardActionArea>
        <CardContent>
          <Typography sx={{ m: 6 }} variant="h6">
            {campos.map((i) => (
              <Typography key={i.name} sx={{ m: 4 }} variant="h6">
                {i.name}:{/* Traer los datos del usuario con REDUX {i.DATO} */}
              </Typography>
            ))}
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
        form={<UserForm />}
      />
    </Card>
  );
}

export default Profile;

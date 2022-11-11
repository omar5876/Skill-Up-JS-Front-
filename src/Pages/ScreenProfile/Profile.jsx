import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

// Faltan traer datos con REDUX
const campos = [{ name: "Nombre" }, { name: "Apellido" }, { name: "Email" }];

function Profile() {
  // const userData = useSelector(store => store.DATOSDELUSUARIO)

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
        <Link to={`user/edit/${USERDATA.ID}`}>
          <Button text="Editar datos" />
        </Link>
        <Button text="Eliminar usuario" />
      </CardActions>
    </Card>
  );
}

export default Profile;

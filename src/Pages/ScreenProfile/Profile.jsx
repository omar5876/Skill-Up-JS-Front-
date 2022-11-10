import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "../../Components/Button/Button";

function Profile() {
  return (
    <Card>
      {/* Avatar */}
      <CardActionArea>
        <CardContent>
          <Typography sx={{ m: 6 }} variant="h6">
            CAMPOS
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button text="Editar" />
        <Button text="Eliminar" />
      </CardActions>
    </Card>
  );
}

export default Profile;

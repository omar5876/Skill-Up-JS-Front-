import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
const StyledButton = styled(Button)`
  width: 100%;
  max-width: 200px;
  height: 70px;
  text-align: center;
`;
const Menu = () => {
  return (
    <Container>
      <StyledButton variant="outlined" component={Link} to={"/admin/users"}>
        ADMINISTRAR USUARIOS
      </StyledButton>
      <StyledButton
        variant="outlined"
        component={Link}
        to={"/admin/transactions"}
      >
        ADMINISTRAR TRANSACCIONES
      </StyledButton>
      <StyledButton
        variant="outlined"
        component={Link}
        to={"/admin/categories"}
      >
        ADMINISTRAR CATEGORIAS
      </StyledButton>
    </Container>
  );
};

export default Menu;
